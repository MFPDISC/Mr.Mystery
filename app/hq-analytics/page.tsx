'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getEventCount, IS_PRODUCTION } from '@/utils/analytics'
import { BarChart3, Lock, RefreshCw, Eye, Music, MousePointer2 } from 'lucide-react'

export default function AnalyticsDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [passcode, setPasscode] = useState('')
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    const [stats, setStats] = useState({
        site_visits: 0,
        song_streams: 0,
        stream_now_clicks: 0,
        spotify: 0,
        apple_music: 0,
        youtube: 0,
        soundcloud: 0,
        instagram: 0
    })

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Simple client-side passcode: MYSTERY2026
        if (passcode === 'MYSTERY2026') {
            setIsAuthenticated(true)
            fetchStats()
        } else {
            setError(true)
            setTimeout(() => setError(false), 2000)
        }
    }

    const fetchStats = async () => {
        setIsLoading(true)
        try {
            const [
                site_visits,
                song_streams,
                stream_now_clicks,
                spotify,
                apple_music,
                youtube,
                soundcloud,
                instagram
            ] = await Promise.all([
                getEventCount('site_visits'),
                getEventCount('song_streams'),
                getEventCount('stream_now_clicks'),
                getEventCount('stream_link_spotify'),
                getEventCount('stream_link_apple_music'),
                getEventCount('stream_link_youtube'),
                getEventCount('stream_link_soundcloud'),
                getEventCount('stream_link_instagram')
            ])

            setStats({
                site_visits,
                song_streams,
                stream_now_clicks,
                spotify,
                apple_music,
                youtube,
                soundcloud,
                instagram
            })
        } catch (err) {
            console.error("Failed to load stats", err)
        } finally {
            setIsLoading(false)
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
                <div className="grain-overlay fixed inset-0 pointer-events-none z-0" />
                <motion.form 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleLogin}
                    className="relative z-10 w-full max-w-sm bg-black/50 border border-white/20 backdrop-blur-md p-8"
                >
                    <div className="flex flex-col items-center mb-8">
                        <Lock className="w-8 h-8 text-white/50 mb-4" />
                        <h1 className="text-2xl font-bold tracking-[0.3em] text-white">HQ ACCESS</h1>
                        <p className="text-xs text-white/40 tracking-widest font-mono mt-2">CLASSIFIED ANALYTICS</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={passcode}
                                onChange={(e) => setPasscode(e.target.value)}
                                placeholder="ENTER PASSCODE"
                                className={`w-full bg-black border ${error ? 'border-red-500 text-red-500' : 'border-white/20 text-white'} p-4 text-center tracking-[0.3em] font-mono focus:outline-none focus:border-white transition-colors`}
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-white text-black font-bold tracking-[0.3em] p-4 hover:bg-white/90 transition-colors"
                        >
                            AUTHENTICATE
                        </button>
                    </div>
                </motion.form>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="grain-overlay fixed inset-0 pointer-events-none z-0" />
            
            <div className="relative z-10 max-w-6xl mx-auto pt-20">
                <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/20 pb-6 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-[0.2em] mb-2">COMMUNICATIONS INTERCEPT</h1>
                        <p className="text-white/50 font-mono tracking-widest text-sm uppercase">Global Transmission Analytics</p>
                    </div>
                    
                    <button 
                        onClick={fetchStats}
                        disabled={isLoading}
                        className="flex items-center gap-2 text-xs font-mono tracking-widest border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors disabled:opacity-50 w-fit"
                    >
                        <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                        {isLoading ? 'SYNCING...' : 'REFRESH DATA'}
                    </button>
                </header>

                {!IS_PRODUCTION && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 mb-8 text-sm font-mono tracking-wide text-center">
                        WARNING: Environment is not set to production. Live tracking may be offline.
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <StatCard 
                        title="TOTAL SITE VISITS" 
                        value={stats.site_visits} 
                        icon={<Eye className="w-6 h-6" />}
                        description="Global homepage hits"
                    />
                    <StatCard 
                        title="DEMO PLAYS" 
                        value={stats.song_streams} 
                        icon={<Music className="w-6 h-6" />}
                        description="INTENTION audio previews"
                    />
                    <StatCard 
                        title="STREAM NOW CLICKS" 
                        value={stats.stream_now_clicks} 
                        icon={<MousePointer2 className="w-6 h-6" />}
                        description="Direct intent to stream"
                    />
                </div>

                <h2 className="text-xl font-bold tracking-[0.2em] mb-6 mt-16 border-l-2 border-white pl-4">EXTERNAL ROUTING ANALYTICS</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <SmallStat title="SPOTIFY" value={stats.spotify} />
                    <SmallStat title="APPLE MUSIC" value={stats.apple_music} />
                    <SmallStat title="SOUNDCLOUD" value={stats.soundcloud} />
                    <SmallStat title="YOUTUBE" value={stats.youtube} />
                    <SmallStat title="INSTAGRAM" value={stats.instagram} />
                </div>
                
                <div className="mt-20 text-center border-t border-white/10 pt-8 opacity-30 text-xs font-mono tracking-[0.2em]">
                    END OF REPORT
                </div>
            </div>
        </div>
    )
}

function StatCard({ title, value, icon, description }: { title: string, value: number, icon: React.ReactNode, description: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-white/20 bg-white/5 p-6 relative overflow-hidden group hover:border-white/50 transition-colors"
        >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                {icon}
            </div>
            <h3 className="text-white/60 text-xs tracking-[0.2em] font-mono mb-2 uppercase">{title}</h3>
            <div className="text-5xl font-bold tracking-tighter mb-4">{value.toLocaleString()}</div>
            <p className="text-[10px] text-white/40 tracking-widest font-mono uppercase">{description}</p>
        </motion.div>
    )
}

function SmallStat({ title, value }: { title: string, value: number }) {
    return (
        <div className="border border-white/10 p-4 hover:bg-white/5 transition-colors">
            <h4 className="text-[10px] text-white/50 tracking-[0.2em] mb-2 uppercase">{title}</h4>
            <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        </div>
    )
}
