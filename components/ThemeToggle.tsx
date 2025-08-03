'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  let theme = 'light'
  let toggleTheme = () => {}

  try {
    const themeContext = useTheme()
    theme = themeContext.theme
    toggleTheme = themeContext.toggleTheme
  } catch (error) {
    console.warn('ThemeProvider not available:', error)
    // Fallback to default values
  }

  const handleClick = () => {
    console.log('ThemeToggle clicked, current theme:', theme)
    toggleTheme()
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-6 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {/* Sliding circle */}
      <motion.div
        className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
        animate={{
          x: theme === 'dark' ? 16 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      />
      
      {/* Icons */}
      <div className="relative w-full h-full flex items-center justify-between px-1">
        <Sun className="w-3 h-3 text-yellow-500" />
        <Moon className="w-3 h-3 text-gray-400" />
      </div>
    </motion.button>
  )
}

export default ThemeToggle 