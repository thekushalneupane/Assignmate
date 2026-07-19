import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Logging in with:', { email, password });
    
    // Simulate login loading state
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div 
      className="font-sans relative overflow-hidden selection:bg-primary-container selection:text-on-primary-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9ff'
      }}
    >
      {/* Background Decorations */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#4648d4]/5 rounded-full blur-[100px] floating-accent z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#a6b5fd]/20 rounded-full blur-[120px] floating-accent z-0 pointer-events-none" style={{ animationDelay: '-3s' }}></div>

      <div className="w-[420px] z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-3 mb-4 bg-[#6063ee] rounded-2xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <span className="material-symbols-outlined text-white text-[36px]">task_alt</span>
          </div>
          <h1 className="text-[32px] font-[800] text-[#121c28] tracking-tight">
            Hey, what's due today? 👀
          </h1>
          <p className="text-[16px] text-[#464554] mt-2">
            Don't forget your assignments lol
          </p>
        </div>

        {/* Login Form Card */}
        <div 
          className="w-full p-[32px] rounded-[24px] shadow-[0px_4px_20px_rgba(99,102,241,0.08)]"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(217, 227, 244, 0.5)'
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-[16px]">
            {/* Email Field */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[700] text-[#464554] px-1" htmlFor="email">
                Email Address
              </label>
              <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#767586] group-focus-within:text-[#4648d4] transition-colors">
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[56px] rounded-[16px] bg-[#ffffff] border border-[rgba(217,227,244,0.5)] focus:border-[#a6b5fd] py-3 pl-12 pr-4 text-[16px] text-[#121c28] font-[600] outline-none transition-all placeholder:text-[#c7c4d7] shadow-sm"
                  placeholder="you@university.edu"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between items-center px-1">
                <label className="text-[14px] font-[700] text-[#464554]" htmlFor="password">
                  Password
                </label>
                <a className="text-[12px] font-[600] text-[#4648d4] hover:text-[#6063ee] transition-colors" href="#">
                  Forgot?
                </a>
              </div>
              <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#767586] group-focus-within:text-[#4648d4] transition-colors">
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[56px] rounded-[16px] bg-[#ffffff] border border-[rgba(217,227,244,0.5)] focus:border-[#a6b5fd] py-3 pl-12 pr-4 text-[16px] text-[#121c28] font-[600] outline-none transition-all placeholder:text-[#c7c4d7] shadow-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-[8px]">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-[56px] rounded-[16px] bg-[#4648d4] text-white hover:bg-[#6063ee] font-[700] text-[16px] transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                    <span>Hang tight...</span>
                  </>
                ) : (
                  <>
                    <span>Jump in</span>
                    <span className="material-symbols-outlined text-[20px] font-bold">rocket_launch</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Social Login Divider */}
          <div className="relative my-[24px]">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[rgba(217,227,244,0.5)]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-[11px] font-[700] text-[#464554] uppercase tracking-widest bg-transparent backdrop-blur-sm">
                or hang with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center h-[56px] rounded-[16px] bg-[#ffffff] border-2 border-[rgba(217,227,244,0.5)] font-[700] text-[14px] text-[#121c28] hover:bg-[#f8f9ff] transition-colors cursor-pointer">
              <img
                alt="Google"
                className="w-5 h-5 mr-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6H-7B4BiFQmt0t8Vd1ifwCGKJPRNhNTfzhVJv8gz8rtq5nUnAwKOyef6uB9XZRr2fFe6B7ihNZ46mEZlkSFQfbpPq0zFjvbGYu61GSxrNK0JVkgU_Z_WSMgUNnbd11smY4HJqV3n4MjQa-YbK5k6azxecu4SR2pD-S84YtgQCda4G_p98XFbzZ4P7gaEecI6RCWoh5S6fc65WeZKRmZYnpYw-MRKKpY6dg2I5Z3f--J8Z_xmVH_-OKOfzUHhGbhS87V4_h1zw8uZ"
              />
              Google
            </button>
            <button className="flex items-center justify-center h-[56px] rounded-[16px] bg-[#ffffff] border-2 border-[rgba(217,227,244,0.5)] font-[700] text-[14px] text-[#121c28] hover:bg-[#f8f9ff] transition-colors cursor-pointer">
              <span className="material-symbols-outlined mr-2 text-[20px] text-[#767586]">groups</span>
              LDAP
            </button>
          </div>
        </div>

        {/* Bottom Navigation/Link */}
        <p className="text-center mt-[32px] text-[16px] text-[#464554] font-[600]">
          New here?{' '}
          <button onClick={() => navigate('/register')} className="text-[#4648d4] font-[700] hover:underline cursor-pointer">
            Join the group
          </button>
        </p>
      </div>
    </div>
  );
}
