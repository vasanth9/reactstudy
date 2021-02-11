import React from 'react'
import Review from './Components/Review'
import './App.css'
 function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review/>
      </section>
     
    </main>
     

  )
}

export default App;