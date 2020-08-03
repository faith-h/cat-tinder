import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'

class MyCats extends React.Component {
  state = { cats: [] }

  componentDidMount() {
    axios.get('/api/my_cats')
      .then(res => this.setState({ cats: res.data }))
  }

  remove = (id) => {
    axios.delete(`/api/cats/${id}`)
      .then(res => {
        this.componentDidMount()
      })
  }

  render() {
    const { cats } = this.state

    return (
      <>
        {this.state.cats.length === 0 ?
          <>
            <h1> Like some cats to get started! </h1>
          </>
          :
          <section class='grid'>
            {cats.map(cat =>
              <div class='grid-item' key={cat.id}>
                <div class='cat-img' style={{ background: `url(${cat.avatar}) no-repeat center` }} />
                <span class='name'> {cat.name} </span>
                < hr />
                <p style={{ textAlign: 'left' }}> Breed: {cat.breed} </p>
                <p style={{ textAlign: 'left' }}> Registry: {cat.registry} </p>
                <button
                  class='button'
                  style={{ color: '#2196f3' }}
                  onClick={() => this.remove(cat.id)}
                >
                  <FontAwesomeIcon icon={faHeartBroken} />
                </button>
              </div>
            )}
          </section>
        }
      </>
    )
  }
}

export default MyCats