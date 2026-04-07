import React, { useState } from 'react';
import { Search, Flame, Award, Bell, Mail, PlusCircle, Menu, Home, Video, Users, BookOpen, Settings, PlayCircle, MoreHorizontal, Heart, MessageCircle, Share2, Bookmark, Music, SkipBack, SkipForward, Play, Pause, ListMusic, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Mock Data
const STORIES = [
  { id: 1, user: 'Sarah J.', avatar: 'https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?w=100&h=100&fit=crop', active: true },
  { id: 2, user: 'TechDaily', avatar: 'https://images.unsplash.com/photo-1618139764364-f53a1831b6b0?w=100&h=100&fit=crop', active: true },
  { id: 3, user: 'Alex Chen', avatar: 'https://images.unsplash.com/photo-1745674684639-9cef0092212c?w=100&h=100&fit=crop', active: false },
  { id: 4, user: 'Vogue Tech', avatar: 'https://images.unsplash.com/photo-1620938289449-98879e017b06?w=100&h=100&fit=crop', active: true },
];

const FEED_ITEMS = [
  {
    id: 1,
    type: 'social',
    user: 'Sarah Johnson',
    role: 'Senior Product Designer at Figma',
    avatar: 'https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?w=100&h=100&fit=crop',
    content: 'Just finished the new design system overhaul! Consistency is key to a great user experience. 🎨✨',
    image: 'https://images.unsplash.com/photo-1618139764364-f53a1831b6b0?w=800&h=500&fit=crop',
    likes: '2.4k',
    comments: 142,
  },
  {
    id: 4,
    type: 'music',
    artist: 'Luna Ray',
    track: 'Neon Horizons',
    albumArt: 'https://images.unsplash.com/photo-1748854091034-abd9d3ea6be8?w=800&h=450&fit=crop',
    genre: 'Synthwave / Electronic',
    trending: true,
  },
  {
    id: 2,
    type: 'article',
    source: 'The Modern Magazine',
    title: 'The Future of AI in Creative Industries',
    excerpt: 'How generative models are reshaping the way we think about artistic expression and professional workflows in 2026.',
    image: 'https://images.unsplash.com/photo-1620938289449-98879e017b06?w=800&h=400&fit=crop',
    readTime: '8 min read',
  },
  {
    id: 3,
    type: 'video',
    user: 'Tech Insights',
    title: '10 Tips for Mastering React in 2026',
    thumbnail: 'https://images.unsplash.com/photo-1608853898358-0a2f9f91e304?w=800&h=450&fit=crop',
    duration: '12:45',
    views: '450k',
  },
];

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24 lg:pb-0">
      {/* Google-inspired Search Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 lg:w-1/4">
          <Menu className="lg:hidden text-gray-500 cursor-pointer" />
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer">
            Nexus
          </div>
        </div>

        <div className="flex-1 max-w-2xl relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search music, news, people, or learn something new..."
            className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
          />
        </div>

        <div className="hidden lg:flex items-center justify-end gap-6 lg:w-1/4">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-orange-600 rounded-full font-bold cursor-pointer hover:bg-orange-100 transition-colors">
            <Flame className="h-5 w-5 fill-current" />
            <span>14</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-bold cursor-pointer hover:bg-blue-100 transition-colors">
            <Award className="h-5 w-5" />
            <span>2,450 XP</span>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <Bell className="h-6 w-6 cursor-pointer hover:text-gray-800 transition-colors" />
            <Mail className="h-6 w-6 cursor-pointer hover:text-gray-800 transition-colors" />
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?w=100&h=100&fit=crop"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar - LinkedIn & Navigation */}
        <aside className="hidden lg:flex flex-col gap-6 w-64 flex-shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="h-16 bg-gradient-to-br from-blue-600 to-indigo-700" />
            <div className="px-4 pb-4 -mt-8 flex flex-col items-center">
              <div className="h-16 w-16 rounded-xl border-4 border-white overflow-hidden bg-white mb-2 shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?w=200&h=200&fit=crop"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-bold text-center">Sarah Johnson</h3>
              <p className="text-xs text-gray-500 text-center mb-4">Senior Product Designer • Creative Mind</p>
              <div className="w-full pt-4 border-t border-gray-100 flex flex-col gap-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500 font-medium">Profile views</span>
                  <span className="text-blue-600 font-bold">428</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500 font-medium">Connections</span>
                  <span className="text-blue-600 font-bold">1,204</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            <NavItem icon={<Home />} label="Feed" active />
            <NavItem icon={<Video />} label="Nexus TV" />
            <NavItem icon={<Music />} label="Music" color="text-green-500" />
            <NavItem icon={<Users />} label="Network" />
            <NavItem icon={<BookOpen />} label="Learning" />
            <NavItem icon={<Settings />} label="Settings" />
          </nav>

          {/* Duolingo-style mini progress */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold mb-3 flex items-center justify-between">
              Daily Goal
              <span className="text-xs text-gray-400 font-normal">Edit</span>
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Daily Quest</span>
                <span className="font-bold">30 / 50 XP</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  className="bg-green-500 h-full rounded-full"
                />
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors mt-2">
                Start Learning
              </button>
            </div>
          </div>
        </aside>

        {/* Main Feed Content */}
        <main className="flex-1 max-w-2xl mx-auto flex flex-col gap-6">
          {/* Stories - Instagram Style */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group">
              <div className="h-16 w-16 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                <PlusCircle />
              </div>
              <span className="text-[10px] font-medium text-gray-500">Your Story</span>
            </div>
            {STORIES.map(story => (
              <div key={story.id} className="flex flex-col items-center gap-1 shrink-0 cursor-pointer">
                <div className={`h-16 w-16 rounded-full p-0.5 ${story.active ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' : 'bg-gray-200'}`}>
                  <div className="h-full w-full rounded-full border-2 border-white overflow-hidden bg-white">
                    <ImageWithFallback src={story.avatar} alt={story.user} className="h-full w-full object-cover" />
                  </div>
                </div>
                <span className="text-[10px] font-medium text-gray-500">{story.user}</span>
              </div>
            ))}
          </div>

          {/* Quick Post - LinkedIn style */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden shrink-0">
                <ImageWithFallback src="https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?w=100&h=100&fit=crop" alt="Avatar" />
              </div>
              <button className="flex-1 text-left px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-500 text-sm font-medium border border-gray-200 transition-colors">
                What's on your mind?
              </button>
            </div>
            <div className="flex justify-between items-center px-2">
              <PostOption icon={<PlusCircle className="text-blue-500" />} label="Media" />
              <PostOption icon={<Video className="text-green-500" />} label="Live" />
              <PostOption icon={<BookOpen className="text-purple-500" />} label="Article" />
            </div>
          </div>

          {/* Feed Items */}
          {FEED_ITEMS.map((item) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={item.id} 
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              {item.type === 'social' && (
                <div className="flex flex-col">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <ImageWithFallback src={item.avatar} alt={item.user} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm leading-tight hover:text-blue-600 cursor-pointer">{item.user}</h4>
                        <p className="text-[11px] text-gray-500">{item.role}</p>
                      </div>
                    </div>
                    <MoreHorizontal className="text-gray-400 cursor-pointer" />
                  </div>
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-800 leading-relaxed">{item.content}</p>
                  </div>
                  <div className="aspect-video bg-gray-100">
                    <ImageWithFallback src={item.image} alt="Content" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-50 pb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="flex -space-x-1">
                          <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center border border-white"><Heart className="h-2 w-2 text-white fill-current" /></div>
                          <div className="h-4 w-4 rounded-full bg-red-500 flex items-center justify-center border border-white"><PlusCircle className="h-2 w-2 text-white fill-current rotate-45" /></div>
                        </div>
                        <span>{item.likes} likes</span>
                      </div>
                      <span>{item.comments} comments</span>
                    </div>
                    <div className="flex justify-between items-center px-2">
                      <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 font-semibold text-sm transition-colors">
                        <Heart className="h-5 w-5" /> Like
                      </button>
                      <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 font-semibold text-sm transition-colors">
                        <MessageCircle className="h-5 w-5" /> Comment
                      </button>
                      <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 font-semibold text-sm transition-colors">
                        <Share2 className="h-5 w-5" /> Share
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {item.type === 'music' && (
                <div className="flex flex-col bg-gradient-to-b from-emerald-50 to-white">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <Music className="h-5 w-5 text-emerald-600" />
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">New Release</span>
                    </div>
                    <button className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-1 rounded">LISTEN NOW</button>
                  </div>
                  <div className="px-4 pb-4 flex gap-4">
                    <div className="h-24 w-24 rounded-lg overflow-hidden shadow-lg group relative cursor-pointer">
                      <ImageWithFallback src={item.albumArt} alt={item.track} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-8 w-8 text-white fill-current" />
                      </div>
                    </div>
                    <div className="flex-1 py-1">
                      <h4 className="text-xl font-bold leading-tight">{item.track}</h4>
                      <p className="text-gray-600 font-medium">{item.artist}</p>
                      <p className="text-xs text-gray-400 mt-2">{item.genre}</p>
                      <div className="flex gap-3 mt-4">
                        <Heart className="h-4 w-4 text-gray-400 cursor-pointer hover:text-emerald-500" />
                        <ListMusic className="h-4 w-4 text-gray-400 cursor-pointer hover:text-emerald-500" />
                        <Share2 className="h-4 w-4 text-gray-400 cursor-pointer hover:text-emerald-500" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {item.type === 'article' && (
                <div className="flex flex-col">
                  <div className="p-4 flex items-center gap-2">
                    <div className="h-6 w-6 bg-black rounded flex items-center justify-center"><span className="text-[10px] text-white font-bold">M</span></div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{item.source}</span>
                  </div>
                  <div className="px-4 pb-4">
                    <h2 className="text-2xl font-serif font-bold mb-2 leading-tight hover:text-blue-600 cursor-pointer">{item.title}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.excerpt}</p>
                  </div>
                  <div className="aspect-[21/9] bg-gray-100">
                    <ImageWithFallback src={item.image} alt="Article" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <span className="text-xs text-gray-400">{item.readTime}</span>
                    <div className="flex gap-4">
                      <Bookmark className="h-5 w-5 text-gray-400 hover:text-gray-800 cursor-pointer" />
                      <Share2 className="h-5 w-5 text-gray-400 hover:text-gray-800 cursor-pointer" />
                    </div>
                  </div>
                </div>
              )}

              {item.type === 'video' && (
                <div className="flex flex-col">
                  <div className="relative aspect-video bg-black group cursor-pointer">
                    <ImageWithFallback src={item.thumbnail} alt="Video" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-14 w-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PlayCircle className="h-8 w-8 text-white fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                      {item.duration}
                    </div>
                  </div>
                  <div className="p-4 flex gap-3">
                    <div className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <Video className="h-4 w-4 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm leading-snug mb-1 line-clamp-2 hover:text-blue-600 cursor-pointer">{item.title}</h4>
                      <p className="text-[11px] text-gray-500">{item.user} • {item.views} views • 2 hours ago</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </main>

        {/* Right Panel - Google Utility & Duolingo Suggestions */}
        <aside className="hidden xl:flex flex-col gap-6 w-80 flex-shrink-0">
          {/* Spotify Style Playlists Card */}
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 p-5 rounded-xl shadow-lg text-white">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Music className="h-5 w-5" />
              Music For You
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="h-10 w-10 bg-indigo-500 rounded flex items-center justify-center shadow-lg overflow-hidden">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1748854091034-abd9d3ea6be8?w=100&h=100&fit=crop" alt="Playlist" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h5 className="font-bold text-sm truncate">Daily Mix 1</h5>
                  <p className="text-[10px] text-emerald-200 truncate">Luna Ray, Synth Master...</p>
                </div>
                <Play className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="h-10 w-10 bg-orange-500 rounded flex items-center justify-center shadow-lg overflow-hidden">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1762160767032-9a639bc9f89e?w=100&h=100&fit=crop" alt="Playlist" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h5 className="font-bold text-sm truncate">Focus Mode</h5>
                  <p className="text-[10px] text-emerald-200 truncate">Lofi, Ambient, Study</p>
                </div>
                <Play className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-white text-emerald-950 rounded-full text-xs font-bold hover:scale-105 transition-transform">
              OPEN PLAYER
            </button>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-lg mb-4">Nexus Learning</h4>
            <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-xl cursor-pointer hover:bg-blue-100 transition-colors border border-blue-100 group">
              <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-2xl">🇪🇸</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Active Course</p>
                <h5 className="font-bold">Spanish Intro</h5>
                <div className="w-full bg-blue-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-blue-600 h-full w-[45%]" />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h5 className="text-sm font-bold text-gray-500 uppercase">Recommended for you</h5>
              <SuggestionItem 
                title="Advanced React Patterns" 
                meta="Course • 12 Lessons" 
                icon={<div className="h-8 w-8 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center"><BookOpen className="h-4 w-4" /></div>}
              />
              <SuggestionItem 
                title="Product Management 101" 
                meta="Workshop • 2 hours" 
                icon={<div className="h-8 w-8 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center"><Award className="h-4 w-4" /></div>}
              />
            </div>
          </div>

          <div className="px-4 text-[11px] text-gray-400 flex flex-wrap gap-x-3 gap-y-1">
            <span className="hover:underline cursor-pointer">About</span>
            <span className="hover:underline cursor-pointer">Accessibility</span>
            <span className="hover:underline cursor-pointer">Help Center</span>
            <span className="hover:underline cursor-pointer">Privacy & Terms</span>
            <span className="hover:underline cursor-pointer">Ad Choices</span>
            <span className="hover:underline cursor-pointer">Nexus © 2026</span>
          </div>
        </aside>
      </div>

      {/* Spotify-inspired Now Playing Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-[60] flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3 w-1/3">
          <div className="h-10 w-10 rounded shadow-md overflow-hidden shrink-0">
            <ImageWithFallback src="https://images.unsplash.com/photo-1748854091034-abd9d3ea6be8?w=100&h=100&fit=crop" alt="Playing" />
          </div>
          <div className="hidden sm:block overflow-hidden">
            <h5 className="font-bold text-sm truncate">Neon Horizons</h5>
            <p className="text-[10px] text-gray-500 truncate">Luna Ray</p>
          </div>
          <Heart className="h-4 w-4 text-emerald-500 fill-current ml-2 cursor-pointer" />
        </div>

        <div className="flex flex-col items-center flex-1 max-w-lg">
          <div className="flex items-center gap-6">
            <SkipBack className="h-4 w-4 text-gray-400 hover:text-gray-900 cursor-pointer" />
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="h-8 w-8 bg-gray-900 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current ml-0.5" />}
            </button>
            <SkipForward className="h-4 w-4 text-gray-400 hover:text-gray-900 cursor-pointer" />
          </div>
          <div className="w-full flex items-center gap-2 mt-2">
            <span className="text-[10px] text-gray-400">1:24</span>
            <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden group cursor-pointer relative">
              <div className="absolute inset-0 bg-emerald-500 w-[35%]" />
            </div>
            <span className="text-[10px] text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 w-1/3 text-gray-400">
          <Volume2 className="h-4 w-4 cursor-pointer hover:text-gray-900" />
          <ListMusic className="h-4 w-4 cursor-pointer hover:text-gray-900" />
        </div>
      </div>

      {/* Mobile Bottom Nav - Shifted up for player */}
      <nav className="lg:hidden fixed bottom-16 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
        <Home className="h-6 w-6 text-blue-600" />
        <Video className="h-6 w-6 text-gray-400" />
        <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white -mt-8 shadow-lg border-4 border-white">
          <PlusCircle className="h-6 w-6" />
        </div>
        <Music className="h-6 w-6 text-emerald-500" />
        <div className="h-6 w-6 rounded-full overflow-hidden grayscale">
          <ImageWithFallback src="https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?w=100&h=100&fit=crop" alt="Profile" />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active = false, color = "text-gray-500" }: { icon: React.ReactElement<{ className?: string }>, label: string, active?: boolean, color?: string }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors group ${active ? 'bg-blue-50 text-blue-600' : `hover:bg-gray-100 hover:text-gray-900 ${color}`}`}>
      {React.cloneElement(icon, { className: `h-5 w-5 ${active ? 'text-blue-600' : 'group-hover:text-gray-700'}` })}
      <span className="font-bold text-sm">{label}</span>
    </div>
  );
}

function PostOption({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex items-center gap-2 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
      {icon}
      <span className="text-xs font-bold text-gray-600">{label}</span>
    </button>
  );
}

function SuggestionItem({ title, meta, icon }: { title: string, meta: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      {icon}
      <div>
        <h5 className="text-sm font-bold group-hover:text-blue-600 transition-colors">{title}</h5>
        <p className="text-[10px] text-gray-500 font-medium">{meta}</p>
      </div>
    </div>
  );
}

function TrendingItem({ tag, count }: { tag: string, count: string }) {
  return (
    <div className="cursor-pointer group">
      <p className="text-sm font-bold group-hover:text-blue-600 transition-colors">{tag}</p>
      <p className="text-[10px] text-gray-500 font-medium">{count}</p>
    </div>
  );
}
