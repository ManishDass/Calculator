import React from 'react'
import {useNavigate} from 'react-router-dom'
import style from '../style/sidebar.module.css'
import home from '../assets/home.svg'
import barChart from '../assets/bar-chart.svg'
import dollarSign from '../assets/dollar-sign.svg'
import thermometer from '../assets/thermometer.svg'
import activity from '../assets/activity.svg'
import watch from '../assets/watch.svg'
import database from '../assets/database.svg'

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <main className={style.typeWrapper}>
                <h1 className={style.calTitle}>Calculator's</h1>
                <p className={style.calInfo}>Select your calculator</p>

                <button onClick={()=>navigate('/')} ><p>123</p></button>
                <button> <img alt='barChart' src={barChart} className={style.icon}></img> </button>

                <button onClick={()=>navigate('/currency')} > <img alt='dollarSign' src={dollarSign} className={style.icon}></img> </button>
                <button> <img alt='home' src={home} className={style.icon}></img> </button>

                <button onClick={()=>navigate('/temperature')} > <img alt='thermometer' src={thermometer} className={style.icon}></img> </button>
                <button> <img alt='activity' src={activity} className={style.icon}></img> </button>

                <button> <img alt='watch' src={watch} className={style.icon}></img> </button>
                <button> <img alt='database' src={database} className={style.icon}></img> </button>

                <p className={style.helpText}>Need some help?</p>
                <p className={style.creditText}>Manish Das</p>
            </main>
        </div>
    )
}

export default Sidebar