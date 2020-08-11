import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  state = { cats: [] }

  componentDidMount() {
    axios.get('/api/cats')
      .then(res => this.setState({ cats: res.data }))
  }

  sample = () => {
    const { cats } = this.state
    if (cats.length) {
      const index = Math.floor(Math.random() * cats.length)
      return cats[index]
    } else {
      return null
    }
  }

  downvote = (id) => {
    const { cats, } = this.state
    this.setState({ cats: cats.filter(c => c.id !== id), })
    this.slideCard()
  }

  upvote = (id) => {
    const { cats } = this.state
    axios.put(`/api/cats/${id}`)
      .then(() => this.setState({ cats: cats.filter(c => c.id !== id), }))
    this.slideCard()
  }

  slideCard = () => {
    var x = document.getElementById('card')
    if (x.className === 'catBox') {
      x.className += 'Out'
      setTimeout(this.reset, 1000)
    } else {
      x.className = 'catBox'
    }
  }

  reset = () => {
    var x = document.getElementById('card')
    if (this.state.cats.length !== 0) {
      x.className = 'catBox'
    }
  }

  render() {
    const cat = this.sample()
    if (cat) {
      return (
        <>
          <div id='card' class='catBox'>
            <div key={cat.id}>
              <div class='cat-img' style={{ background: `url(${cat.avatar}) no-repeat center` }} />
              <p>
                <p class='name'> {cat.name} </p>
                <p> Breed: {cat.breed} </p>
                <p> Registry: {cat.registry} </p>
                <button
                  class='button'
                  style={{ color: '#2196f3' }}
                  onClick={() => this.downvote(cat.id)}
                >
                  <FontAwesomeIcon icon={faHeartBroken} />
                </button>
                <button
                  class='button'
                  style={{ color: '#fb3d61' }}
                  onClick={() => this.upvote(cat.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </p>
            </div>
          </div>
        </>
      )
    } else {
      return <div class='fill-page'> <h1> No more cats are available. Please check back later. </h1> </div>
    }
  }
}

export default Home