import { useCallback } from 'react'
import './index.scss'

function Error404() {
  const handleRedirect = useCallback(() => {
    window.location.assign('/')
  }, [])

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Üzr istəyirik, bu səhifə mövcud deyil.</p>
        <button className="back-home" onClick={handleRedirect}>
          Ana səhifəyə qayıt
        </button>
      </div>
    </div>
  )
}

export default Error404
