import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Save, MonitorStop, Terminal, ChevronRight, CheckCircle2, FileText } from 'lucide-react';
import { Button, Card } from '../ui';

import { useHackathon } from '../../context/HackathonContextState';

export default function CodingIDE() {
    const { state, submitCode } = useHackathon();
    const [code, setCode] = useState(`// Two Sum Problem
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function solve(nums, target) {
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if(map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`);

    const [activeTab, setActiveTab] = useState('description');
    const [isRunning, setIsRunning] = useState(false);
    const [output, setOutput] = useState<any[]>([]);

    const handleRun = async () => {
        setIsRunning(true);
        setOutput([{ type: 'info', message: 'Running test cases...' }]);

        try {
            const result = await submitCode(code, 'javascript');
            setOutput([
                { type: 'info', message: result.message },
                { type: 'pending', message: 'Executing in sandbox...' }
            ]);

            // Wait for simulated result from DB (polling through context)
            setTimeout(() => {
                setOutput(prev => [
                    ...prev,
                    { type: 'system', message: 'Execution complete.' }
                ]);
                setIsRunning(false);
            }, 3000);
        } catch (error) {
            setOutput([{ type: 'error', message: 'Submission failed. Please check connection.' }]);
            setIsRunning(false);
        }
    };

    return (
        <div className="h-[calc(100vh-120px)] flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <h2 className="text-xl font-bold">Coding Round 01</h2>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold animate-pulse w-fit">
                        <MonitorStop size={14} />
                        01:45:22 Left
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="secondary" size="sm" className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-[10px] sm:text-xs px-2 sm:px-3">
                        <Save size={14} />
                        Auto-saved
                    </Button>
                    <Button
                        size="sm"
                        onClick={handleRun}
                        disabled={isRunning}
                        className={`flex-1 sm:flex-none flex items-center justify-center gap-2 text-[10px] sm:text-xs px-2 sm:px-3 bg-green-600 hover:bg-green-700 ${isRunning ? 'opacity-50' : ''}`}
                    >
                        {isRunning ? <Terminal className="animate-spin" size={14} /> : <Play size={14} />}
                        {isRunning ? 'Executing...' : 'Run Submissions'}
                    </Button>
                </div>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row gap-4 overflow-hidden">
                {/* Left: Description */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4 overflow-y-auto min-h-[300px] lg:min-h-0">
                    <Card className="flex-1">
                        <div className="flex gap-4 border-b border-border-custom mb-6">
                            {['description', 'submissions'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 text-sm font-bold capitalize transition-all relative ${activeTab === tab ? 'text-primary' : 'text-foreground-custom/30'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {activeTab === 'description' ? (
                                <motion.div
                                    key="desc"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-lg font-bold">1. Two Sum</h3>
                                    <div className="px-3 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold w-fit">Easy</div>
                                    <p className="text-foreground-custom/60 text-sm leading-relaxed">
                                        Given an array of integers <code className="text-primary bg-primary/10 px-1 rounded">nums</code> and an integer <code className="text-primary bg-primary/10 px-1 rounded">target</code>, return indices of the two numbers such that they add up to <code className="text-primary bg-primary/10 px-1 rounded">target</code>.
                                    </p>
                                    <div className="p-4 rounded-xl bg-foreground-custom/5 border border-border-custom space-y-3">
                                        <p className="text-xs font-bold text-foreground-custom/40">Example 1:</p>
                                        <pre className="text-xs text-primary font-mono whitespace-pre-wrap">
                                            Input: nums = [2,7,11,15], target = 9{"\n"}
                                            Output: [0,1]{"\n"}
                                            Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                                        </pre>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="subs"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="space-y-3"
                                >
                                    {state.submissions.length > 0 ? (
                                        state.submissions.map((sub, idx) => (
                                            <div key={idx} className="p-3 rounded-xl bg-foreground-custom/5 border border-border-custom flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg ${sub.status === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                                        {sub.status === 'success' ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold capitalize">{sub.status}</p>
                                                        <p className="text-[10px] text-foreground-custom/30">{new Date(sub.timestamp).toLocaleString()}</p>
                                                    </div>
                                                </div>
                                                <span className="text-[10px] font-mono text-foreground-custom/40">{sub.language}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-12 text-center">
                                            <FileText className="mx-auto mb-4 text-foreground-custom/20" size={48} />
                                            <p className="text-foreground-custom/40 text-sm">No submissions yet.</p>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                </div>

                {/* Right: Editor */}
                <div className="flex-1 flex flex-col gap-4">
                    <Card className="flex-1 p-0 overflow-hidden flex flex-col bg-[#1e1e2e]/40">
                        <div className="flex items-center justify-between px-4 py-2 bg-foreground-custom/5 border-b border-border-custom">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                <span className="text-xs font-mono text-foreground-custom/50">solution.js</span>
                            </div>
                            <select className="bg-transparent text-[10px] font-bold text-primary outline-none cursor-pointer">
                                <option>JavaScript (v18)</option>
                                <option>Python (v3.10)</option>
                                <option>C++ (v17)</option>
                            </select>
                        </div>
                        <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="flex-1 bg-transparent p-6 font-mono text-sm outline-none resize-none text-white/80 leading-relaxed"
                            spellCheck={false}
                        />
                    </Card>

                    <Card className="h-1/3 bg-background-custom/80 border-t-2 border-primary/20 overflow-y-auto">
                        <div className="flex items-center gap-2 mb-4 text-foreground-custom/40">
                            <Terminal size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">Console Output</span>
                        </div>
                        <div className="space-y-2 font-mono text-sm">
                            {output.length > 0 ? (
                                output.map((log, i) => (
                                    <div key={i} className={`flex items-start gap-2 ${log.type === 'error' ? 'text-red-500' :
                                            log.type === 'success' ? 'text-green-500' :
                                                'text-foreground-custom/60'
                                        }`}>
                                        <ChevronRight size={14} className="mt-1" />
                                        <span>{log.message}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="flex items-center gap-2 text-foreground-custom/20 italic">
                                    <span>Waiting for code to run...</span>
                                </div>
                            )}

                            {/* Most recent completed submission status */}
                            {state.submissions[0] && !isRunning && (
                                <div className={`mt-4 p-3 rounded-lg border ${state.submissions[0].status === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'
                                    }`}>
                                    <div className="flex items-center gap-2 font-bold mb-1">
                                        {state.submissions[0].status === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                                        <span>{state.submissions[0].status.toUpperCase()}</span>
                                    </div>
                                    <pre className="text-xs whitespace-pre-wrap opacity-80">
                                        {state.submissions[0].results.stdout || state.submissions[0].results.stderr}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

// Additional icons needed
import { XCircle, AlertCircle } from 'lucide-react';
