import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';
import '../styles/Page.css';
import '../styles/Contato.css';

// 1. Crie uma conta gratuita em https://www.emailjs.com/
// 2. Troque os 3 valores abaixo pelos dados da sua conta (Service ID, Template ID, Public Key)
const EMAILJS_SERVICE_ID = 'SEU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'template_tv2lblk';
const EMAILJS_PUBLIC_KEY = 'SUA_PUBLIC_KEY';

const contactLinks = [
  {
    label: 'E-mail',
    href: 'mailto:seuemail@exemplo.com',
    icon: FaEnvelope,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/fillipeg-ca',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/FillipeG',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/fillipeeg',
    icon: FaInstagram,
  },
];

export default function Contato() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Informe seu nome.';
    if (!form.email.trim()) {
      newErrors.email = 'Informe seu e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!form.message.trim()) newErrors.message = 'Escreva uma mensagem.';
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString('pt-BR'),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      setStatus('error');
    }
  }

  return (
    <section className="page-section">
      <PageTitle>Contato</PageTitle>

      <div className="contato-content">
        <p className="contato-intro">
          Tem um projeto em mente ou quer bater um papo? Preencha o formulário
          ou me chame por um dos canais abaixo.
        </p>

        <div className="contato-icons">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="contato-icon"
              aria-label={label}
            >
              <Icon size={22} />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <form className="contato-form" onSubmit={handleSubmit} noValidate>
          <div className="contato-field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
            />
            {errors.name && <span className="contato-error">{errors.name}</span>}
          </div>

          <div className="contato-field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="seuemail@exemplo.com"
            />
            {errors.email && <span className="contato-error">{errors.email}</span>}
          </div>

          <div className="contato-field">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Escreva sua mensagem..."
            />
            {errors.message && <span className="contato-error">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="contato-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
          </button>

          {status === 'success' && (
            <p className="contato-feedback contato-feedback--success">
              Mensagem enviada com sucesso! Retornarei em breve.
            </p>
          )}
          {status === 'error' && (
            <p className="contato-feedback contato-feedback--error">
              Não foi possível enviar sua mensagem. Tente novamente ou use um
              dos canais acima.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}