import { useState } from 'react';

export default function Register({ onSwitchView }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    console.log('Registering user:', { name, email, password });

    // Simulate registration loading and success states
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <main className="flex-grow flex items-center justify-center px-container-padding-mobile py-stack-lg relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-primary/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"></div>

        <div className="w-full max-w-md z-10">
          {/* Header Section */}
          <div className="text-center mb-stack-lg">
            <div className="inline-flex items-center justify-center p-3 mb-stack-md bg-primary-container rounded-2xl shadow-lg transform rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
              <span className="material-symbols-outlined text-white text-4xl">school</span>
            </div>
            <h1 className="text-[28px] md:text-[32px] font-extrabold text-primary tracking-tight">
              Join AssignMate
            </h1>
            <p className="text-base text-on-surface-variant font-medium mt-2">
              Your digital living room for getting things done.
            </p>
          </div>

          {/* Registration Form Card */}
          <div className="glass-card bg-surface-container-lowest border border-outline-variant/50 p-6 md:p-8 rounded-3xl shadow-[0px_4px_20px_rgba(99,102,241,0.08)]">
            {success ? (
              <div className="text-center py-8 space-y-4">
                <span className="material-symbols-outlined text-[64px] text-green-500 animate-bounce">celebration</span>
                <h2 className="text-2xl font-extrabold text-on-surface">Welcome aboard! 🎉</h2>
                <p className="text-on-surface-variant">Your AssignMate room is ready. Let's go!</p>
                <button
                  onClick={onSwitchView}
                  className="bouncy-hover w-full py-4 bg-primary text-white rounded-2xl text-sm font-bold shadow-md cursor-pointer hover:bg-primary-container transition-colors"
                >
                  Log In Now
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="registrationForm">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant block px-1" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                      person
                    </span>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary-container rounded-2xl py-3 pl-12 pr-4 text-base text-on-surface font-semibold outline-none transition-all focus:bg-white placeholder:text-outline/50"
                      placeholder="Alex Johnson"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant block px-1" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                      mail
                    </span>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary-container rounded-2xl py-3 pl-12 pr-4 text-base text-on-surface font-semibold outline-none transition-all focus:bg-white placeholder:text-outline/50"
                      placeholder="alex@campus.edu"
                      required
                    />
                  </div>
                </div>

                {/* Password Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant block px-1" htmlFor="password">
                      Password
                    </label>
                    <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                        lock
                      </span>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary-container rounded-2xl py-3 pl-12 pr-4 text-base text-on-surface font-semibold outline-none transition-all focus:bg-white placeholder:text-outline/50"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant block px-1" htmlFor="confirm_password">
                      Confirm
                    </label>
                    <div className="relative group transition-transform duration-200 focus-within:scale-[1.02]">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                        key
                      </span>
                      <input
                        id="confirm_password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary-container rounded-2xl py-3 pl-12 pr-4 text-base text-on-surface font-semibold outline-none transition-all focus:bg-white placeholder:text-outline/50"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-primary text-white rounded-2xl text-sm font-bold bouncy-hover transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer hover:bg-primary-container"
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
            )}

            {/* Footnote */}
            <div className="mt-6 flex gap-3 p-4 bg-surface-container rounded-2xl items-start border border-outline-variant/20">
              <span className="material-symbols-outlined text-tertiary text-lg font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                info
              </span>
              <p className="text-xs font-semibold text-on-surface-variant leading-relaxed">
                Small note: Your editor/viewer access will be set by whoever runs this
              </p>
            </div>
          </div>

          {/* Bottom Navigation/Link */}
          <p className="text-center mt-8 text-base text-on-surface-variant font-semibold">
            Already have a room?{' '}
            <button onClick={onSwitchView} className="text-primary font-bold hover:underline cursor-pointer">
              Log in
            </button>
          </p>
        </div>
      </main>

      {/* Visual Asymmetric Detail */}
      <div className="hidden lg:block fixed bottom-12 left-12 transform -rotate-12 opacity-80 select-none">
        <div className="glass-card p-4 rounded-2xl border border-outline-variant/40 shadow-lg flex items-center gap-4 hover:rotate-0 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] font-bold">celebration</span>
          </div>
          <div>
            <p className="text-xs font-bold text-on-surface">3 friends just joined</p>
            <div className="flex -space-x-2 mt-1">
              <img
                className="w-6 h-6 rounded-full border-2 border-surface-container-lowest object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcwGVSwW9L2pq_iYOoAJVedoD0wQ11kOtLHE7deKqpbfXcQVlAclO6hiwggHeRfP8w5dFAAw37ASYm4t_LZGDgIkY_bpapzh7tHltB465CodC794DMBqcN_X1UL8vl1SqxJJeOlXJIhb3_WqRtP8DBOEDE7aU2BIuO3LFrsVho_PfmoYkDvJKMOb0STTT1bjnyEAfjmZDBQNoluyn6JxAzHQiKx9r7YLpCsgv0zx3fgmGGHBedqlMtC2HILwEt5gItOn2cBrO6rUfv"
                alt="Avatar 1"
              />
              <img
                className="w-6 h-6 rounded-full border-2 border-surface-container-lowest object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgD3iI7g5bOqu5Mf1mS6h9wTUAPNEreg0I95ny-9kTTDookAcQvRvI6cci35-uPR82gaZH-6ZJivQCSPR5vNrAXx4kv4ERf_Mu5PGGGkWNbwjbYEa7Ps1KUFGLl_V3P6wv9rdUMuBv2LtJK_CgAKyWTDWouD3_IAdHDjuly5RnfKAy1Z0ZjKsY6s4RNvNKU2FCnHucW6Zl8r8ZSEge2l2bjJN-ApmZq32widdxoK9Btcm6PqnzjZGjVGr9EKLBjKtPDLJLfmN-qZlz"
                alt="Avatar 2"
              />
              <img
                className="w-6 h-6 rounded-full border-2 border-surface-container-lowest object-cover"
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
