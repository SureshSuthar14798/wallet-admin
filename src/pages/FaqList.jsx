import React, { useState } from 'react';
import {
  HelpCircle,
  RotateCcw,
  MessageSquare,
  X,
  Save
,
  Search} from 'lucide-react';

const FaqList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="animate-enter space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-text-main tracking-tight">Faq List</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2"
          >
            Registration
          </button>
        </div>

        {/* Filter Section */}
        <div className="bg-panel border border-border-custom rounded-2xl p-6">
          <div className="flex justify-end items-center gap-3">
            <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[150px]">
              <option>- Search Options -</option>
              <option>Question</option>
              <option>Answer</option>
            </select>
            <div className="relative flex-1 max-w-xs">
              <input
                type="text"
                placeholder="Please select a search opt"
                className="w-full bg-inputBg border border-border-custom text-text-main rounded-lg px-4 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <button className="px-6 py-1.5 bg-primary text-white rounded-lg text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <Search size={14} /> Search
            </button>
            <button className="px-5 py-1.5 bg-panel border border-border-custom text-text-secondary rounded-lg text-xs font-bold hover:bg-panel-hover transition-all flex items-center gap-2">
              <RotateCcw size={12} /> Reset
            </button>
          </div>
        </div>

        <div className="flex justify-end px-2">
          <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">Total : 0 Count (1/1) Page</span>
        </div>

        <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden text-center">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-inputBg/50 border-b border-border-custom">
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">No.</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Question</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Answer</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Registration Date</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Correction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-inputBg border border-border-custom rounded-2xl flex items-center justify-center text-text-muted/40">
                        <MessageSquare size={24} />
                      </div>
                      <span className="text-xs font-bold text-text-muted">No data available in table</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-border-custom bg-inputBg/10 flex justify-center items-center gap-3">
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 opacity-50">Previous</button>
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 opacity-50">Next</button>
          </div>
        </div>

      </div>
      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-panel border border-border-custom w-full max-w-2xl rounded-[20px] shadow-2xl relative z-10 animate-scale-in overflow-hidden">
            <div className="p-5 border-b border-border-custom relative">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-text-main tracking-tight">Faq registration & editing</h3>
                <p className="text-[11px] text-text-muted font-bold tracking-tight uppercase opacity-60">Create or update platform frequently asked questions</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 bg-inputBg border border-border-custom rounded-xl flex items-center justify-center text-text-muted hover:text-text-main hover:bg-panel-hover transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 pb-0 space-y-4">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                  <HelpCircle size={14} className="text-primary" /> Question
                </label>
                <input
                  type="text"
                  placeholder="Please enter question"
                  className="w-full bg-inputBg border border-border-custom text-text-main rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                  <MessageSquare size={14} className="text-primary" /> Answer
                </label>
                <textarea
                  rows="6"
                  placeholder="Please enter answer."
                  className="w-full bg-inputBg border border-border-custom text-text-main rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted resize-none"
                ></textarea>
              </div>
            </div>

            <div className="p-5 flex gap-4">
              <button
                className="px-8 py-3.5 bg-primary text-white rounded-[18px] text-xs font-black shadow-lg shadow-primary/30 hover:opacity-90 transition-all flex items-center gap-2 tracking-widest uppercase"
                onClick={() => setIsModalOpen(false)}
              >
                <Save size={16} /> Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-3.5 bg-inputBg border border-border-custom text-text-secondary rounded-[18px] text-xs font-black hover:bg-panel-hover transition-all tracking-widest uppercase"
              >
                List
              </button>
            </div>
          </div>
        </div>
      )}
    </>

  );
};

export default FaqList;
