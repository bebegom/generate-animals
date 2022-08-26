import {Button, Container, Form} from 'react-bootstrap'
import data from '../../data/animals.json'
import { useState } from 'react'

const HomePage = () => {
    const [amount, setAmount] = useState()
    const [slicedAnimals, setSlicedAnimals] = useState()

    const handleOnChange = () => {
        setAmount(quantity.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        shuffle(data)
        setSlicedAnimals(data.slice(0, amount))
    }

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

    return (
        <Container className='my-5 d-flex flex-column align-items-center'>
            <Button onClick={handleSubmit} type='submit' variant='secondary' className='my-3'>Generate</Button>
            <Form>
                <label htmlFor="quantity" className='mx-2'>Choose how many animals you want:</label>
                <input onChange={handleOnChange} type="number" id="quantity" name="quantity" min="1" max={data.length} />
            </Form>

            <div>
                {slicedAnimals && (
                    <div className='my-3'>
                        {slicedAnimals.map((animal, index) => (
                            <div key={index}>
                                {animal}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    )
}

export default HomePage
