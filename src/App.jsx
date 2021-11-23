import React from 'react'
import {useFavicon, useTitle, useLogger} from 'react-use'
// import UseClickAway from './hooks/UI/UseClickAway'
// import UseCss from './hooks/UI/UseCss'
// import UseSlider from './hooks/UI/UseSlider'
// import UseRaf from './hooks/Animations/UseRaf'

// import UseInterval from './hooks/Animations/UseInterval'
// import UseTimout from './hooks/Animations/UseTimout'
// import UseUpdate from './hooks/Animations/UseUpdate'

// import UseCookie from './hooks/Side-effects/UseCookie'
// import UseLockBodyScroll from './hooks/Side-effects/UseLockBodyScroll'
// import UseLocalStorage from './hooks/Side-effects/UseLocalStorage'
// import UseSessionStorage from './hooks/Side-effects/UseSessionStorage'

// import UseEffectOnce from './hooks/LifeCycles/UseEffectOnce'
// import UseEvent from './hooks/LifeCycles/UseEvent'
// import UseMount from './hooks/LifeCycles/UseMount'
// import useUnmount from './hooks/LifeCycles/useUnmount'
// import useUpdateEffect from './hooks/LifeCycles/useUpdateEffect'

// import UseHover from './hooks/Sensors/UseHover'
// import UseIdle from './hooks/Sensors/UseIdle'
// import UseKeyPressEvent from './hooks/Sensors/UseKeyPressEvent'
// import UseMedia from './hooks/Sensors/UseMedia'
// import UseMouse from './hooks/Sensors/UseMouse'
// import UseOrientation from './hooks/Sensors/UseOrientation'
// import UseScroll from './hooks/Sensors/UseScroll'
// import UseScrolling from './hooks/Sensors/UseScrolling'
// import UseCreateBreakpoint from './hooks/Sensors/UseCreateBreakpoint'

// import UseToggle from './hooks/State/UseToggle'
// import UseCounter from './hooks/State/UseCounter'
// import UseList from './hooks/State/UseList'
// import UseMap from './hooks/State/UseMap'

function App() {
  useFavicon('https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico')
  useTitle('React use')
  useLogger('render')

  return <div className="container"></div>
}

export default App
