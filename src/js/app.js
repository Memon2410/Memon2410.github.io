// Styles
import '../scss/app.scss'

// Components
import Input from './components/input'
import Video from './components/video'

document.addEventListener('DOMContentLoaded', () => {
  const video = new Video()
  video.initVideo()

  const input = new Input()
  input.initInput()
})
