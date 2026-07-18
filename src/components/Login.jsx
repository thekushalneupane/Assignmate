import { useState } from 'react';

export default function Login({ onSwitchView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ripples, setRipples] = useState([]);

  // Handles custom ripple animation on button click
  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Alert or dispatch authentication logic here
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen p-container-padding-mobile md:p-container-padding-desktop selection:bg-primary/30 selection:text-primary">
      {/* Background Atmospheric Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[350px] md:w-[400px] h-[350px] md:h-[400px] bg-primary/5 rounded-full blur-[80px] md:blur-[100px] floating-accent"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-secondary-container/20 rounded-full blur-[100px] md:blur-[120px] floating-accent" style={{ animationDelay: '-2s' }}></div>
      </div>

      <main className="w-full max-w-[480px]">
        {/* Brand Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-container rounded-2xl shadow-lg mb-6 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <span className="material-symbols-outlined text-white text-[32px] font-bold">task_alt</span>
          </div>
          <h1 className="font-sans font-extrabold text-[32px] md:text-[40px] leading-tight text-on-surface mb-2">
            Hey, what's due today? 👀
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] text-on-surface-variant font-medium">
            Don't forget your assignments lol
          </p>
        </div>

        {/* Login Card */}
        <div className="glass-card p-6 md:p-8 rounded-3xl shadow-[0px_4px_20px_rgba(99,102,241,0.08)] border border-outline-variant/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block font-sans text-sm font-bold text-on-surface ml-1" htmlFor="email">
                Email
              </label>
              <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 bg-surface-container-lowest border-2 border-secondary-fixed text-on-surface font-sans text-base rounded-xl focus:ring-0 focus:border-primary focus:bg-white transition-all outline-none placeholder:text-outline-variant"
                  placeholder="you@university.edu"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="font-sans text-sm font-bold text-on-surface" htmlFor="password">
                  Password
                </label>
                <a className="font-sans text-xs font-semibold text-primary hover:text-primary-container transition-colors" href="#">
                  Forgot?
                </a>
              </div>
              <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 bg-surface-container-lowest border-2 border-secondary-fixed text-on-surface font-sans text-base rounded-xl focus:ring-0 focus:border-primary focus:bg-white transition-all outline-none placeholder:text-outline-variant"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              onClick={handleButtonClick}
              className="bouncy-hover relative overflow-hidden w-full h-14 bg-secondary-container hover:bg-primary-container text-primary hover:text-white font-sans text-lg font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Jump in</span>
              <span className="material-symbols-outlined font-bold text-[20px]">rocket_launch</span>

              {/* Custom click ripple elements */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                  }}
                  className="absolute pointer-events-none w-2 h-2 bg-white/40 rounded-full animate-ping -translate-x-1/2 -translate-y-1/2"
                />
              ))}
            </button>
          </form>

          {/* Social Login Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[#FAF9F6]/50 backdrop-blur-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                or hang with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bouncy-hover flex items-center justify-center h-12 border-2 border-outline-variant/40 rounded-xl font-sans text-sm font-bold text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer">
              <img
                alt="Google"
                className="w-5 h-5 mr-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6H-7B4BiFQmt0t8Vd1ifwCGKJPRNhNTfzhVJv8gz8rtq5nUnAwKOyef6uB9XZRr2fFe6B7ihNZ46mEZlkSFQfbpPq0zFjvbGYu61GSxrNK0JVkgU_Z_WSMgUNnbd11smY4HJqV3n4MjQa-YbK5k6azxecu4SR2pD-S84YtgQCda4G_p98XFbzZ4P7gaEecI6RCWoh5S6fc65WeZKRmZYnpYw-MRKKpY6dg2I5Z3f--J8Z_xmVH_-OKOfzUHhGbhS87V4_h1zw8uZ"
              />
              Google
            </button>
            <button className="bouncy-hover flex items-center justify-center h-12 border-2 border-outline-variant/40 rounded-xl font-sans text-sm font-bold text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer">
              <span className="material-symbols-outlined mr-2 text-[20px] text-outline">groups</span>
              LDAP
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <button
            onClick={onSwitchView}
            className="bouncy-hover inline-flex items-center gap-2 font-sans text-base text-on-surface-variant hover:text-primary transition-colors group cursor-pointer"
          >
            New here? <span className="text-primary font-bold">Join the group</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Decorative Floating Avatars (Facepiles) */}
        <div className="hidden md:block absolute bottom-12 left-12 transform -rotate-12 opacity-80 select-none">
          <div className="flex -space-x-3">
            <img
              alt="Friend 1"
              className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIVTiLRhliCvvdWP30PkKn20ZnmjBVNZJZV_ifyrSL9nkBIVZlYLdo1rMFSx-ngoz8f-2fIfNLk7Sb19Ar2n_VsY3Z28neyEBxMGg_lpOfn1Xz4IGdsDkwHWftvfBkD9zF6S3MyhXOjg3YRnLWgJQ3vqhpYqk-lZS7u1AVGyTtClaAA2pvWHKx48mawHkFBiCM50q6SLvgp7MECuazSr3_eCTkpbjsKYQ038tlKN7oVbQMpM0zqry_Q3Iwy8mPkKyUxElvbrj9a1me"
            />
            <img
              alt="Friend 2"
              className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9ZW_v7yXnWcccaBwYnooMZC54uc0sKLEzv_QNlylXkvMw5shS7K6EV83iSqoO9HkrMoKfHYJ1exEFg2jzw87TNUbphkOckLi4wzmklOHkr6IMzDeXi_YgLZ2NQewHBzhBfRUHZcfTOymb4uYNj2rU9arxtYRIpcD0QitME2ZxebqAdw6O0gZtAA1kDRN98w9OSplSGOPGn-1p6aJnELdgvp8kZoRMlxIAfkK2e9a2sB1B0belOmtl7IrPGhyDiWOpfp09KpX7n4V"
            />
            <div className="w-12 h-12 rounded-full border-4 border-white bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold shadow-lg">
              +12
            </div>
          </div>
          <p className="mt-2 text-[12px] text-on-surface-variant font-semibold text-center">
            Your group is waiting!
          </p>
        </div>
      </main>
    </div>
  );
}
