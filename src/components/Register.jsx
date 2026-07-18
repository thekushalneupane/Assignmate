import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    console.log('Registering user:', { name, email, password });

    // Simulate registration loading state
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
          <div className="inline-flex items-center justify-center p-3 mb-4 bg-[#6063ee] rounded-2xl shadow-lg transform rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
            <span className="material-symbols-outlined text-white text-[36px]">school</span>
          </div>
          <h1 className="text-[32px] font-[800] text-[#4648d4] tracking-tight">
            Join AssignMate
          </h1>
          <p className="text-[16px] text-[#464554] mt-2">
            Your digital living room for getting things done.
          </p>
        </div>

        {/* Registration Form Card */}
        <div 
          className="w-full p-[32px] rounded-[24px] shadow-[0px_4px_20px_rgba(99,102,241,0.08)]"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(217, 227, 244, 0.5)'
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-[16px]">
            {/* Name Field */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-[700] text-[#464554] px-1" htmlFor="name">
                Full Name
              </label>
              <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#767586] group-focus-within:text-[#4648d4] transition-colors">
                  person
                </span>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[56px] rounded-[16px] bg-[#ffffff] border border-[rgba(217,227,244,0.5)] focus:border-[#a6b5fd] py-3 pl-12 pr-4 text-[16px] text-[#121c28] font-[600] outline-none transition-all placeholder:text-[#c7c4d7] shadow-sm"
                  placeholder="Alex Johnson"
                  required
                />
              </div>
            </div>

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
                  placeholder="alex@campus.edu"
                  required
                />
              </div>
            </div>

            {/* Password Fields Grid */}
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-[700] text-[#464554] px-1" htmlFor="password">
                  Password
                </label>
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
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-[700] text-[#464554] px-1" htmlFor="confirm_password">
                  Confirm
                </label>
                <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#767586] group-focus-within:text-[#4648d4] transition-colors">
                    key
                  </span>
                  <input
                    id="confirm_password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-[56px] rounded-[16px] bg-[#ffffff] border border-[rgba(217,227,244,0.5)] focus:border-[#a6b5fd] py-3 pl-12 pr-4 text-[16px] text-[#121c28] font-[600] outline-none transition-all placeholder:text-[#c7c4d7] shadow-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>
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
                    <span>I'm in</span>
                    <span className="material-symbols-outlined text-[20px] font-bold">backpack</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footnote */}
          <div className="mt-[24px] flex gap-3 p-4 bg-[#e5eeff] rounded-[16px] items-start border border-[rgba(217,227,244,0.5)]">
            <span className="material-symbols-outlined text-[#301400] text-[20px] font-bold">
              info
            </span>
            <p className="text-[12px] font-[600] text-[#464554] leading-relaxed">
              Small note: Your editor/viewer access will be set by whoever runs this
            </p>
          </div>
        </div>

        {/* Bottom Navigation/Link */}
        <p className="text-center mt-[32px] text-[16px] text-[#464554] font-[600]">
          Already have a room?{' '}
          <button onClick={() => navigate('/login')} className="text-[#4648d4] font-[700] hover:underline cursor-pointer">
            Log in
          </button>
        </p>
      </div>

      {/* Visual Asymmetric Detail */}
      <div className="hidden lg:block fixed bottom-12 left-12 transform -rotate-12 opacity-80 select-none">
        <div 
          className="p-4 rounded-[16px] border border-[rgba(217,227,244,0.5)] shadow-lg flex items-center gap-4 hover:rotate-0 transition-transform duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="w-10 h-10 rounded-full bg-[#ffdcc5] text-[#301400] flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] font-bold">celebration</span>
          </div>
          <div>
            <p className="text-[12px] font-[700] text-[#121c28]">3 friends just joined</p>
            <div className="flex -space-x-2 mt-1">
              <img
                className="w-6 h-6 rounded-full border-2 border-[#ffffff] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcwGVSwW9L2pq_iYOoAJVedoD0wQ11kOtLHE7deKqpbfXcQVlAclO6hiwggHeRfP8w5dFAAw37ASYm4t_LZGDgIkY_bpapzh7tHltB465CodC794DMBqcN_X1UL8vl1SqxJJeOlXJIhb3_WqRtP8DBOEDE7aU2BIuO3LFrsVho_PfmoYkDvJKMOb0STTT1bjnyEAfjmZDBQNoluyn6JxAzHQiKx9r7YLpCsgv0zx3fgmGGHBedqlMtC2HILwEt5gItOn2cBrO6rUfv"
                alt="Avatar 1"
              />
              <img
                className="w-6 h-6 rounded-full border-2 border-[#ffffff] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgD3iI7g5bOqu5Mf1mS6h9wTUAPNEreg0I95ny-9kTTDookAcQvRvI6cci35-uPR82gaZH-6ZJivQCSPR5vNrAXx4kv4ERf_Mu5PGGGkWNbwjbYEa7Ps1KUFGLl_V3P6wv9rdUMuBv2LtJK_CgAKyWTDWouD3_IAdHDjuly5RnfKAy1Z0ZjKsY6s4RNvNKU2FCnHucW6Zl8r8ZSEge2l2bjJN-ApmZq32widdxoK9Btcm6PqnzjZGjVGr9EKLBjKtPDLJLfmN-qZlz"
                alt="Avatar 2"
              />
              <img
                className="w-6 h-6 rounded-full border-2 border-[#ffffff] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbVT-NK-h7Wab5KQlhS6G-fAnNVVb-1tgR6ljT1fNLkFPU4r_YVPkNhXIsSVdfRoVPQolZ36ysSsPY5zdcLMdpAMxZqhPJemF4Jj6KSbgzAzDYnhXipgGUV57AHvw8X6gUKh4oMgE5aECgd2iKPT_t6Z6Odw0x32DubbfPG9Tz8RBOcloP267VWAb4QuazttF5ifXB03otCLlzDPfWfArDkFUMf083B5GWHZIzRDg-37w8KV-iwLap_O1tvYL7LvUd7EdTG0fCUPUu"
                alt="Avatar 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
