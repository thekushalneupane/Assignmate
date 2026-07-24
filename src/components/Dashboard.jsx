import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
const role = params.get('role') || 'viewer';
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-container-padding-mobile md:px-container-padding-desktop h-20 bg-[#f8f9ff]/80 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-white text-xl font-bold">task_alt</span>
          </div>
          <span className="font-heading font-extrabold text-2xl text-on-surface">AssignMate</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-outline">notifications</span>
            <span className="absolute top-3 right-3 w-3 h-3 bg-error rounded-full border-2 border-[#f8f9ff]"></span>
          </button>
          <img
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-surface-container-lowest shadow-sm object-cover cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIVTiLRhliCvvdWP30PkKn20ZnmjBVNZJZV_ifyrSL9nkBIVZlYLdo1rMFSx-ngoz8f-2fIfNLk7Sb19Ar2n_VsY3Z28neyEBxMGg_lpOfn1Xz4IGdsDkwHWftvfBkD9zF6S3MyhXOjg3YRnLWgJQ3vqhpYqk-lZS7u1AVGyTtClaAA2pvWHKx48mawHkFBiCM50q6SLvgp7MECuazSr3_eCTkpbjsKYQ038tlKN7oVbQMpM0zqry_Q3Iwy8mPkKyUxElvbrj9a1me"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[800px] mx-auto px-container-padding-mobile md:px-0 py-stack-lg">
        
        {/* Header */}
        <div className="mb-stack-lg flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="font-sans font-extrabold text-[32px] md:text-[40px] leading-tight text-on-surface">
                Hey Alex 👋
              </h1>
              <span className={`px-3 py-1 rounded-full text-[12px] font-bold tracking-wide ${role === 'editor' ? 'bg-primary-container text-white' : 'bg-surface-container-high text-on-surface'}`}>
                {role === 'editor' ? 'Editor' : 'Viewer'}
              </span>
            </div>
            <p className="font-sans text-[16px] text-on-surface-variant font-medium">
              You have 3 tasks due this week. You've got this!
            </p>
          </div>
        </div>

        {/* Task Accordion Group (Placeholder) */}
        <div className="space-y-4">
          
          {/* Accordion Item: Math */}
          <div className="bg-surface-container-lowest rounded-3xl shadow-[0px_4px_20px_rgba(99,102,241,0.08)] overflow-hidden border border-outline-variant/30">
            {/* Accordion Header */}
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-container-low transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-12 bg-primary rounded-full"></div>
                <h2 className="font-sans font-bold text-[18px] text-on-surface tracking-wide">MATH 101</h2>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                expand_less
              </span>
            </div>
            
            {/* Accordion Content */}
            <div className="px-4 pb-4 space-y-3 pl-10">
              
              {/* Task Card 1 */}
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl border border-secondary-fixed hover:border-secondary-container transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors">
                    {/* Checkbox empty */}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[16px] text-on-surface group-hover:text-primary transition-colors">Calculus Assignment 4</h3>
                    <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      <span className="font-sans text-[12px] font-semibold">Today, 11:59 PM</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex bg-error-container text-error px-3 py-1 rounded-full text-[12px] font-bold tracking-wide">
                    OVERDUE 😬
                  </div>
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                </div>
              </div>
              
              {/* Task Card 2 */}
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl border border-secondary-fixed hover:border-secondary-container transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors"></div>
                  <div>
                    <h3 className="font-sans font-bold text-[16px] text-on-surface group-hover:text-primary transition-colors">Study for Midterm</h3>
                    <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      <span className="font-sans text-[12px] font-semibold">Tomorrow</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[12px] font-bold tracking-wide">
                    DUE TOMORROW ⚠️
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#904900]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Item: CS */}
          <div className="bg-surface-container-lowest rounded-3xl shadow-[0px_4px_20px_rgba(99,102,241,0.08)] overflow-hidden border border-outline-variant/30">
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-container-low transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-12 bg-secondary rounded-full"></div>
                <h2 className="font-sans font-bold text-[18px] text-on-surface tracking-wide">COMP SCI 202</h2>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors transform rotate-180">
                expand_less
              </span>
            </div>
          </div>
          
        </div>
      </main>

      {/* Floating Action Button */}
      {role === 'editor' && (
        <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-2xl shadow-lg flex items-center justify-center hover:bg-primary-container hover:scale-105 active:scale-95 transition-all z-40 bouncy-hover">
          <span className="material-symbols-outlined text-[32px]">add</span>
        </button>
      )}
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] floating-accent"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[120px] floating-accent" style={{ animationDelay: '-3s' }}></div>
      </div>
    </div>
  );
}
