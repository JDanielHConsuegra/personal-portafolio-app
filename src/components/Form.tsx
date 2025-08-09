"use client"
import {Formik, Field, ErrorMessage, Form} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import {postMessage} from "@/services/postMessage";
import { useRouter } from 'next/navigation';

export interface IMessage {
    name: string;
    email: string;
    message: string;
}

export const ContactForm = () => {
    const router = useRouter();
    const ToogleMessage = async (values: IMessage) => {
        try {
            console.log("Sending message:", values);

            const res = await postMessage(values);
            if (res.message === "Failed to send message"){
                toast.error(`${res.message} Sorry, ${values.name}, please try again later.`);
                return;
            }
            if (res.message === "Message sent successfully"){
                toast.success("Mensaje enviado correctamente!");
                router.push("/");
                return;
            }
            if (res.message === "An unexpected error occurred") {
                toast.error(`${res.message} Please try again later. ${values.name}`);
                console.log("Unexpected error:", res.error);
                return;
            }
        } catch (error) {
            toast.error("Error al enviar el formulario");
            console.log("Error al enviar el formulario:", error);
            
        }
    }
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
    onSubmit={(values) => {
        ToogleMessage(values);
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