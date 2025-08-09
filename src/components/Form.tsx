import {Formik, Field, ErrorMessage, Form} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';

export const ContactForm = () => {
    const initial = {
        name: '',
        email: '',
        message: ''
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required')
    });
return (
    <div>
    <Formik
    initialValues={initial}
    onSubmit={()=>{
        toast.success("Formulario enviado");
    }}
    validationSchema={validationSchema}
    >
    <Form>
        <div className="flex shadow-2xl shadow-amber-50 rounded-2xl p-15 flex-col gap-4">
            <Field
            placeholder="Name"
            name="name"
            type="text"
            className="p-2 rounded-md border border-gray-300 placeholder-white bg-transparent text-white"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

            <Field
            placeholder="Email"
            name="email"
            type="email"
            className="p-2 rounded-md border border-gray-300 placeholder-white bg-transparent text-white"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

            <Field
            placeholder="Message"
            name="message"
            as="textarea"
            className="p-2 rounded-md border border-gray-300 h-32 resize-none placeholder-white bg-transparent text-white"
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />

            <button type="submit" className="bg-blue-950 text-white p-2 cursor-pointer rounded-md hover:bg-blue-900 transition-colors duration-200">Send</button>
        </div>
    </Form>

    </Formik>
    </div>
)
}