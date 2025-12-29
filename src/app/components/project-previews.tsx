'use client'

export function JointlyPreview() {
    return (
        <div className="w-full max-w-sm rounded-xl overflow-hidden bg-[#0a0a0a] border border-neutral-800 shadow-2xl">
            {/* Net Worth Card - based on NetWorthCard.tsx */}
            <div className="p-4 border-b border-neutral-800">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-neutral-400">Net Worth</span>
                    <span className="text-[10px] text-emerald-400">View accounts →</span>
                </div>
                <p className="text-2xl font-bold text-white mb-3">$24,850.00</p>
                
                {/* Distribution Bar - matches TYPE_COLORS from NetWorthCard */}
                <div className="h-2 rounded-full overflow-hidden flex mb-3 bg-neutral-800">
                    <div className="h-full bg-blue-500" style={{width: '45%'}}/>
                    <div className="h-full bg-green-500" style={{width: '20%'}}/>
                    <div className="h-full bg-purple-500" style={{width: '25%'}}/>
                    <div className="h-full bg-orange-500" style={{width: '10%'}}/>
                </div>
                
                {/* Account Types Grid - 2x2 like NetWorthCard */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-800/50">
                        <div className="p-1.5 rounded-lg bg-blue-500/10">
                            <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-400">Bank</p>
                            <p className="text-xs font-semibold text-white">$11.2K</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-800/50">
                        <div className="p-1.5 rounded-lg bg-green-500/10">
                            <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-400">Cash</p>
                            <p className="text-xs font-semibold text-white">$4.9K</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-800/50">
                        <div className="p-1.5 rounded-lg bg-purple-500/10">
                            <svg className="w-3 h-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-400">Savings</p>
                            <p className="text-xs font-semibold text-white">$6.2K</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-800/50">
                        <div className="p-1.5 rounded-lg bg-orange-500/10">
                            <svg className="w-3 h-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-400">Investments</p>
                            <p className="text-xs font-semibold text-white">$2.5K</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Recent Transactions - based on RecentTransactions.tsx */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-neutral-400">Recent Transactions</span>
                    <span className="text-[10px] text-emerald-400">View all →</span>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-neutral-800/50">
                        <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center">
                            <span className="text-xs">🛒</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-white truncate">Groceries</p>
                            <p className="text-[10px] text-neutral-500">Cash • Dec 28</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12"/>
                            </svg>
                            <span className="text-xs font-medium text-white">$85.00</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-neutral-800/50">
                        <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center">
                            <span className="text-xs">💰</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-white truncate">Salary</p>
                            <p className="text-[10px] text-neutral-500">Bank • Dec 25</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6"/>
                            </svg>
                            <span className="text-xs font-medium text-green-500">$4,500</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function WeProjectPreview() {
    return (
        <div className="w-full max-w-sm rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-2xl">
            {/* Wedding Header - based on WeddingHeader.tsx */}
            <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-neutral-900">John & Sarah</h3>
                            <p className="text-[10px] text-neutral-500">Your Wedding Planning Hub</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-rose-600">142</p>
                        <p className="text-[10px] text-neutral-500">days left</p>
                    </div>
                </div>
            </div>
            
            {/* Quick Stats - based on QuickStats.tsx */}
            <div className="p-4 border-b border-neutral-100">
                <div className="grid grid-cols-4 gap-2">
                    <div className="text-center p-2 rounded-lg bg-blue-50">
                        <svg className="w-4 h-4 text-blue-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <p className="text-sm font-bold text-neutral-900">156</p>
                        <p className="text-[9px] text-neutral-500">Guests</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-green-50">
                        <svg className="w-4 h-4 text-green-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p className="text-sm font-bold text-neutral-900">$18K</p>
                        <p className="text-[9px] text-neutral-500">Budget</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-purple-50">
                        <svg className="w-4 h-4 text-purple-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                        </svg>
                        <p className="text-sm font-bold text-neutral-900">8/12</p>
                        <p className="text-[9px] text-neutral-500">Tasks</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-rose-50">
                        <svg className="w-4 h-4 text-rose-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p className="text-sm font-bold text-neutral-900">67%</p>
                        <p className="text-[9px] text-neutral-500">Progress</p>
                    </div>
                </div>
            </div>
            
            {/* Guest Insights + Tasks */}
            <div className="p-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-neutral-50">
                    <p className="text-[10px] text-neutral-500 mb-2">Guest RSVPs</p>
                    <div className="flex items-end gap-1 mb-2">
                        <span className="text-lg font-bold text-neutral-900">89%</span>
                        <span className="text-[10px] text-green-500 mb-0.5">confirmed</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-neutral-200 overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{width: '89%'}}/>
                    </div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-50">
                    <p className="text-[10px] text-neutral-500 mb-2">Upcoming</p>
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-sm border border-rose-400"/>
                            <span className="text-[10px] text-neutral-700 truncate">Finalize menu</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-sm border border-rose-400"/>
                            <span className="text-[10px] text-neutral-700 truncate">Send invites</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
