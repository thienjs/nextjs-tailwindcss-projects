import Container from '@/components/Container'
import { useEffect, useState } from 'react'



function CountdownPage() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    const difference = +new Date(`${year}-08-01`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())

  //update every second
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })
  return (
    <Container>

    <div className="text-center w-full">
      <div className="justify-center flex bg-th-background py-4">
        
      </div>
      <div className="bg-th-background flex flex-col py-2 text-center text-green-200 dark:text-cyan-200">
        <p className="font-semibold">days: </p>{' '}
        <p className="text-4xl font-extrabold">{timeLeft.days}</p>
      </div>
      <div className="bg-fuchsia-600 dark:bg-rose-600 flex flex-col py-2 text-center text-green-400 dark:text-cyan-400">
        <p className="font-semibold">hours: </p>{' '}
        <p className="text-4xl font-extrabold">{timeLeft.hours}</p>
      </div>
      <div className="bg-fuchsia-400 dark:bg-rose-400 flex flex-col py-2 text-center text-green-600 dark:text-cyan-600">
        <p className="font-semibold">minutes: </p>{' '}
        <p className="text-4xl font-extrabold">{timeLeft.minutes}</p>
      </div>
      <div className="bg-fuchsia-200 dark:bg-rose-200 flex flex-col py-2 text-center text-green-800 dark:text-cyan-800">
        <p className="font-semibold">seconds: </p>{' '}
        <p className="text-4xl font-extrabold">{timeLeft.seconds}</p>
      </div>
    </div>
    </Container>
  )
}

export default CountdownPage
