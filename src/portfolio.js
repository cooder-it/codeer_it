import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import "./static/css/portfolio.css"

export default function portfolio (){
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit   ={{ opacity: 0 }}
            className="portfolio_site">
            <h2>This site is under development</h2>
            <button>
            <Link to="">BACK</Link>
            </button>
        </motion.div>
    )
}