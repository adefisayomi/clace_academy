import '../styles/globals.css'
import GlobalContext from '../src/context/globlalContext'
import Wrapper from '../src/components/wrapper/wrapper'



export default function app ({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </GlobalContext>
  )
} 
