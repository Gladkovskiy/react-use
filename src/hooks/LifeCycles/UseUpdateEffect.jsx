import React from 'react'
import {useUpdateEffect} from 'react-use'

const Demo = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useUpdateEffect(() => {
    console.log('count', count) // will only show 1 and beyond

    return () => {
      // *OPTIONAL*
      // do something on unmount
    }
  }) // you can include deps array if necessary

  return <div>Count: {count}</div>
}

export default Demo
