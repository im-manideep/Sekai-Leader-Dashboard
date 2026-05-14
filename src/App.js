import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock creator data
const mockCreators = [
  {
    id: 1,
    rank: 1,
    username: 'Jack Sparrow',
    avatar: '🎮',
    totalLikes: 127500,
    totalPlays: 2340000,
    bestGame: 'Echoes in the Loop',
    gameThumb: '🎯',
    category: 'Action',
    growth: '+34%'
  },
  {
    id: 2,
    rank: 2,
    username: 'PixelMaster',
    avatar: '👾',
    totalLikes: 98200,
    totalPlays: 1890000,
    bestGame: 'Neon Runner',
    gameThumb: '⚡',
    category: 'Arcade',
    growth: '+28%'
  },
  {
    id: 3,
    rank: 3,
    username: 'CodeQueen',
    avatar: '👑',
    totalLikes: 86700,
    totalPlays: 1520000,
    bestGame: 'Mind Maze',
    gameThumb: '🧩',
    category: 'Puzzle',
    growth: '+22%'
  }
];

const moreCreators = [
  { rank: 4, username: 'GhostRider', avatar: '👻', totalLikes: 72100, bestGame: 'Shadow Quest' },
  { rank: 5, username: 'NeonDreams', avatar: '🌟', totalLikes: 65400, bestGame: 'Color Burst' },
  { rank: 6, username: 'RetroGamer', avatar: '🕹️', totalLikes: 58900, bestGame: 'Pixel Paradise' },
  { rank: 7, username: 'StarCraft', avatar: '⭐', totalLikes: 52300, bestGame: 'Galaxy Wars' },
  { rank: 8, username: 'ByteHunter', avatar: '🎯', totalLikes: 47800, bestGame: 'Code Combat' },
];

const formatNumber = (num) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
};

const CreatorPodium = ({ creator, index }) => {
  const heights = ['280px', '240px', '220px'];
  const glowColors = [
    'rgba(255, 215, 0, 0.3)',
    'rgba(192, 192, 192, 0.3)',
    'rgba(205, 127, 50, 0.3)'
  ];
  const rankColors = ['#FFD700', '#C0C0C0', '#CD7F32'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        height: heights[index],
        flex: index === 0 ? 1.2 : 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: index === 0 ? 10 : 5 - index
      }}
    >
      {/* Rank Badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
        style={{
          position: 'absolute',
          top: index === 0 ? '-20px' : '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: index === 0 ? '48px' : '40px',
          height: index === 0 ? '48px' : '40px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${rankColors[index]}, ${rankColors[index]}dd)`,
          border: `3px solid ${rankColors[index]}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: index === 0 ? '24px' : '20px',
          fontWeight: '900',
          color: '#000',
          boxShadow: `0 0 30px ${glowColors[index]}, 0 8px 16px rgba(0,0,0,0.4)`,
          zIndex: 20
        }}
      >
        {creator.rank}
      </motion.div>

      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        style={{
          width: index === 0 ? '80px' : '64px',
          height: index === 0 ? '80px' : '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: index === 0 ? '36px' : '28px',
          marginBottom: '12px',
          border: '3px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 15
        }}
      >
        {creator.avatar}
      </motion.div>

      {/* Username */}
      <div style={{
        fontSize: index === 0 ? '18px' : '15px',
        fontWeight: '700',
        color: '#fff',
        marginBottom: '4px',
        letterSpacing: '-0.02em'
      }}>
        @{creator.username}
      </div>

      {/* Stats */}
      <div style={{
        fontSize: '13px',
        color: '#a0a0a0',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span>❤️ {formatNumber(creator.totalLikes)}</span>
        {index === 0 && <span>•</span>}
        {index === 0 && <span>▶️ {formatNumber(creator.totalPlays)}</span>}
      </div>

      {/* Best Game Badge */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '8px 12px',
        fontSize: '12px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '16px'
      }}>
        <span>{creator.gameThumb}</span>
        <span style={{ opacity: 0.9 }}>{creator.bestGame}</span>
      </div>

      {/* Podium Base */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
        style={{
          width: '100%',
          flex: 1,
          background: `linear-gradient(180deg, ${rankColors[index]}15, ${rankColors[index]}05)`,
          border: `1px solid ${rankColors[index]}30`,
          borderRadius: '16px 16px 0 0',
          position: 'relative',
          transformOrigin: 'bottom',
          boxShadow: `inset 0 1px 0 ${rankColors[index]}40`
        }}
      >
        {/* Growth Badge */}
        {index === 0 && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(34, 197, 94, 0.15)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '8px',
            padding: '4px 8px',
            fontSize: '11px',
            fontWeight: '700',
            color: '#22c55e',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span>📈</span>
            {creator.growth}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const CreatorRow = ({ creator, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.08 }}
    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }}
  >
    {/* Rank */}
    <div style={{
      width: '32px',
      fontSize: '16px',
      fontWeight: '700',
      color: '#666',
      fontFamily: '"SF Mono", "Monaco", monospace'
    }}>
      #{creator.rank}
    </div>

    {/* Avatar */}
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      marginRight: '12px',
      border: '2px solid rgba(255, 255, 255, 0.08)'
    }}>
      {creator.avatar}
    </div>

    {/* Info */}
    <div style={{ flex: 1 }}>
      <div style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#fff',
        marginBottom: '2px'
      }}>
        @{creator.username}
      </div>
      <div style={{
        fontSize: '12px',
        color: '#888'
      }}>
        {creator.bestGame}
      </div>
    </div>

    {/* Likes */}
    <div style={{
      fontSize: '14px',
      fontWeight: '600',
      color: '#a0a0a0',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }}>
      ❤️ {formatNumber(creator.totalLikes)}
    </div>
  </motion.div>
);

export default function SekaiCreatorsDashboard() {
  const [activeTab, setActiveTab] = useState('weekly');
  const [showFullLeaderboard, setShowFullLeaderboard] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: '#fff',
      fontFamily: '"Outfit", -apple-system, BlinkMacSystemFont, sans-serif',
      padding: '0',
      overflow: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Header */}
      <div style={{
        padding: '20px 20px 16px 20px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, transparent 100%)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px)'
      }}>
        {/* Top Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}>
          <div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '900',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '4px'
            }}>
              Top Creators
            </h1>
            <p style={{
              fontSize: '13px',
              color: '#666',
              fontWeight: '500'
            }}>
              This week's gaming legends
            </p>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '10px 16px',
              color: '#fff',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🔍 Search
          </motion.button>
        </div>

        {/* Time Period Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '14px',
          padding: '4px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {['daily', 'weekly', 'all-time'].map((tab) => (
            <motion.button
              key={tab}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === tab 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'transparent',
                color: activeTab === tab ? '#fff' : '#888',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === tab ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none'
              }}
            >
              {tab.replace('-', ' ')}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Podium Section */}
      <div style={{
        padding: '32px 20px 40px 20px',
        position: 'relative'
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '300px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-end',
          justifyContent: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Reorder: 2nd, 1st, 3rd for podium effect */}
          <CreatorPodium creator={mockCreators[1]} index={1} />
          <CreatorPodium creator={mockCreators[0]} index={0} />
          <CreatorPodium creator={mockCreators[2]} index={2} />
        </div>
      </div>

      {/* Rest of Leaderboard */}
      <div style={{
        padding: '0 20px 100px 20px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          padding: '20px',
          backdropFilter: 'blur(20px)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '800',
              letterSpacing: '-0.02em'
            }}>
              Rising Stars
            </h3>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFullLeaderboard(!showFullLeaderboard)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#667eea',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {showFullLeaderboard ? 'Show Less' : 'View All'} →
            </motion.button>
          </div>

          <div>
            {moreCreators.slice(0, showFullLeaderboard ? 8 : 5).map((creator, index) => (
              <CreatorRow key={creator.rank} creator={creator} index={index} />
            ))}
          </div>
        </div>

        {/* Your Rank */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '24px',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center'
          }}
        >
          <div style={{
            fontSize: '14px',
            color: '#a0a0a0',
            marginBottom: '8px',
            fontWeight: '500'
          }}>
            Your Current Rank
          </div>
          <div style={{
            fontSize: '36px',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px'
          }}>
            #47
          </div>
          <div style={{
            fontSize: '13px',
            color: '#888',
            fontWeight: '500'
          }}>
            Keep creating to climb the ranks! 🚀
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation (matching Sekai) */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '12px 20px 24px 20px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 100
      }}>
        {[
          { icon: '🏠', label: 'Home' },
          { icon: '🔍', label: 'Explore', active: true },
          { icon: '➕', label: 'Create' },
          { icon: '💬', label: 'Chat' },
          { icon: '👤', label: 'Profile' }
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              opacity: item.active ? 1 : 0.5,
              transition: 'opacity 0.2s'
            }}
          >
            <div style={{ fontSize: '24px' }}>{item.icon}</div>
            {item.active && (
              <div style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#667eea'
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
