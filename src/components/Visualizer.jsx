import React, { useState, useEffect } from 'react';
import { Play, Square, Settings2, Activity, Database, CheckCircle2 } from 'lucide-react';

export default function Visualizer() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [metrics, setMetrics] = useState({ f1: 0.89, precision: 0.91, recall: 0.88 });
  const [activeTab, setActiveTab] = useState('FlakeGuard');

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            setRunning(false);
            return 100;
          }
          return p + 2;
        });
        
        // Jitter metrics slightly to look live
        if (Math.random() > 0.5) {
          setMetrics(m => ({
            f1: Math.min(0.99, m.f1 + (Math.random() * 0.02 - 0.01)),
            precision: Math.min(0.99, m.precision + (Math.random() * 0.02 - 0.01)),
            recall: Math.min(0.99, m.recall + (Math.random() * 0.02 - 0.01))
          }));
        }
      }, 50);
    }
    return () => clearInterval(interval);
  }, [running]);

  const toggleRun = () => {
    if (running) {
      setRunning(false);
    } else {
      if (progress >= 100) setProgress(0);
      setRunning(true);
    }
  };

  return (
    <section id="demos" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-label">Interactive Demo</div>
        <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
          Algorithm Visualizer
        </h2>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          {/* Controls Panel */}
          <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Settings2 size={16} color="var(--indigo-light)" /> Model Execution
              </h3>
              
              <div className="tab-bar">
                <button 
                  className={`tab-btn ${activeTab === 'FlakeGuard' ? 'active' : ''}`}
                  onClick={() => setActiveTab('FlakeGuard')}
                >
                  FlakeGuard
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'AMPQ' ? 'active' : ''}`}
                  onClick={() => setActiveTab('AMPQ')}
                >
                  AMPQ
                </button>
              </div>
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {activeTab === 'FlakeGuard' 
                ? 'Simulate the extraction of code features (AST metrics, execution traces) to classify a test case as Flaky or Robust.'
                : 'Simulate Adaptive Mixed-Precision Quantization process on edge device constraints.'}
            </p>

            <div style={{ flex: 1 }}></div>

            <div style={{ background: 'var(--glass-strong)', borderRadius: 8, padding: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: 8, color: 'var(--text-secondary)' }}>
                <span>Execution Progress</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>{progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%`, transition: running ? 'width 50ms linear' : 'width 0.3s ease' }}></div>
              </div>
            </div>

            <button 
              onClick={toggleRun} 
              className={`btn ${running ? 'btn-outline' : 'btn-primary'}`}
              style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
            >
              {running ? <><Square size={14} /> Stop Execution</> : <><Play size={14} /> {progress >= 100 ? 'Restart Simulation' : 'Run Simulation'}</>}
            </button>
          </div>

          {/* Visualizer output */}
          <div className="visualizer-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
              <Activity size={16} color="var(--teal)" />
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Live Inference Metrics</span>
              
              <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.7rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: running ? '#10b981' : '#64748b' }}></span>
                {running ? 'PROCESSING' : 'IDLE'}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 4 }}>F1-Score</div>
                <div className="metric-display">
                  <span className="metric-value" style={{ color: 'var(--indigo-light)' }}>{metrics.f1.toFixed(3)}</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 4 }}>Precision</div>
                <div className="metric-display">
                  <span className="metric-value" style={{ color: 'var(--teal-light)' }}>{metrics.precision.toFixed(3)}</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 4 }}>Recall</div>
                <div className="metric-display">
                  <span className="metric-value" style={{ color: 'var(--gold-light)' }}>{metrics.recall.toFixed(3)}</span>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, background: '#050811', borderRadius: 6, padding: '1rem', overflow: 'hidden', position: 'relative' }}>
              <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Database size={12} /> Console Output
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, opacity: progress > 0 ? 1 : 0.3 }}>
                <div style={{ color: '#a5b4fc' }}>&gt; Initializing environment... [OK]</div>
                {progress > 10 && <div style={{ color: '#94a3b8' }}>&gt; Loading {activeTab} model weights...</div>}
                {progress > 30 && <div style={{ color: '#a5b4fc' }}>&gt; Model loaded in 142ms.</div>}
                {progress > 40 && <div style={{ color: '#94a3b8' }}>&gt; Parsing input dataset batch (n=1024)...</div>}
                {progress > 60 && <div style={{ color: '#a5b4fc' }}>&gt; Running feature extraction...</div>}
                {progress > 80 && <div style={{ color: '#a5b4fc' }}>&gt; Applying classifier...</div>}
                {progress >= 100 && (
                  <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                    <CheckCircle2 size={12} /> Inference complete. Results saved.
                  </div>
                )}
              </div>
              
              {/* Scan line effect when running */}
              {running && (
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'rgba(14,165,233,0.5)',
                  boxShadow: '0 0 10px rgba(14,165,233,0.8)',
                  animation: 'scan 2s linear infinite'
                }}></div>
              )}
            </div>

          </div>

        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
