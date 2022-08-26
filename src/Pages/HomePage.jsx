import {Button, Container, Form} from 'react-bootstrap'
import data from '../../data/animals.json'
import { useState } from 'react'
import { useEffect } from 'react'

const HomePage = () => {
    const [amount, setAmount] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('e prevented')
        setAmount(quantity.value)
    }
    
    useEffect(() => {
        console.log(amount)
    }, [amount])

    return (
        <Container className='my-5 d-flex flex-column align-items-center'>
            <Button onClick={handleSubmit} type='submit' variant='secondary' className='my-3'>Generate</Button>
            <Form>
                <label htmlFor="quantity" className='mx-2'>Choose how many animals you want:</label>
                <input type="number" id="quantity" name="quantity" min="1" max={data.length} />
            </Form>
        </Container>
    )
}

export default HomePage
