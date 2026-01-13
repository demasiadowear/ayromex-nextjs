// Animation Variants for Framer Motion

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.6, 0.05, 0.01, 0.9] 
    }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2 
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export const scaleIn = {
  hidden: { 
    scale: 0.9, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(255,107,53,0.3)',
      '0 0 40px rgba(255,107,53,0.5)',
      '0 0 20px rgba(255,107,53,0.3)',
    ],
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    }
  }
}

export const float = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Navbar scroll animation
export const navbarVariants = {
  top: {
    backgroundColor: 'rgba(11, 15, 20, 0)',
    backdropFilter: 'blur(0px)',
  },
  scrolled: {
    backgroundColor: 'rgba(11, 15, 20, 0.95)',
    backdropFilter: 'blur(20px)',
    transition: { duration: 0.3 }
  }
}

// Text reveal animations
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
}
