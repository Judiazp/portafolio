import Title from '../../atoms/title';
import Input from '../../atoms/input';
import TextArea from '../../atoms/textArea';
import Button from '../../atoms/button';
import './form.css';

const Form = () => {
    return (
        <form className="contact-form">
            <Title menssage='Contactame' />
            <Input />
            <Input />
            <TextArea />
            <Button message='Enviar mensaje' />
        </form>
    )
}

export default Form;