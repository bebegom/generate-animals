import {Button, Container, Form} from 'react-bootstrap'

const HomePage = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('e prevented')
    }
    return (
        <Container className='my-5 d-flex flex-column align-items-center'>
            <Button onClick={handleSubmit} type='submit' variant='secondary' className='my-3'>Generate</Button>
            <Form>
                <label htmlFor="quantity" className='mx-2'>Choose how many animals you want:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="224" /> {/* TODO: change to data.length */}
            </Form>
        </Container>
    )
}

export default HomePage
