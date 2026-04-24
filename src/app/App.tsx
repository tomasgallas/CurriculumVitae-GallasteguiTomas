import { Mail, Phone, MapPin, Github, Linkedin, Code, Briefcase, GraduationCap, Award, Download, Globe } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import fotoPerfil from '../assets/FotoCV.jpg';

export default function App() {
  const handleDownloadPDF = () => {
    window.print();
  };

  const personalInfo = {
    name: "Tomás Gallastegui",
    title: "Desarrollador Web & IT Support",
    email: "gallasteguitomase@gmail.com",
    phone: "+54 9 264 415 2298",
    location: "San Juan, Argentina",
    github: "github.com/tomasgallas",
    linkedin: "linkedin.com/in/tomas-gallastegui-90a373342",
    website: "tomasgallas.github.io"
  };

  const summary = "Desarrollador de software e IT enfocado en soluciones a medida. Especializado en backend, sitios web y automatización para optimizar flujos de trabajo.";

  const experience = [
    {
      company: "Laboratorio de Informática Aplicada (LIA) - UNSJ",
      position: "Soporte Técnico IT & Software",
      period: "2025 - Actualidad",
      achievements: [
        "Mantenimiento y actualización de sistemas operativos basados en Linux (Ubuntu).",
        "Instalación, actualización y despliegue de aplicaciones y entornos de desarrollo.",
        "Soporte técnico de hardware y redes para garantizar la continuidad del laboratorio."
      ]
    },
    {
      company: "Universidad Nacional de San Juan",
      position: "Ayudante de Cátedra",
      period: "2025 - Actualidad",
      achievements: [
        "Apoyo pedagógico y técnico en la cátedra 'Estructura y Funcionamiento de la Computadora'.",
        "Gestión y seguimiento de asistencia y datos de alumnos mediante automatizaciones en Google Forms y Excel.",
      ]
    },
    {
      company: "NTN Tintas y Toners",
      position: "Técnico de Mantenimiento y Atención",
      period: "2020 - 2024",
      achievements: [
        "Atención al público.",
        "Resolución de incidencias técnicas y configuración de equipos de clientes."
      ]
    }
  ];

  const education = [
    {
      degree: "Licenciatura en Sistemas de Información",
      institution: "Universidad Nacional de San Juan",
      period: "2026"
    },
    {
      degree: "Técnico Universitario en Programación Web",
      institution: "Universidad Nacional de San Juan",
      period: "2023-2025"
    }
  ];

  const skills = [
    "JavaScript", "Python", "SQL", "HTML/CSS", "n8n", "Docker", "Supabase", 
    "Pandas", "Streamlit", "Power BI", "Linux (Ubuntu)", "Git & GitHub", "Excel Avanzado", "Java", "Flutter",
    "Firebase", ".NET Core", "Astro"
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <style>{`
        @media print {
          html, body { margin: 0; padding: 0; background: white; }
          .no-print { display: none !important; }
          .print-container {
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 0;
            box-shadow: none !important;
          }
        }
        @page {
          size: A4;
          margin: 0;
        }
      `}</style>

      <div className="print-container w-[210mm] h-[297mm] bg-white shadow-2xl flex overflow-hidden">

        {/* Columna Izquierda - Sidebar */}
        <div className="w-[35%] bg-gradient-to-b from-slate-800 to-slate-900 text-white p-8 flex flex-col">

          {/* Foto de perfil con tu componente */}
          <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-500 flex-shrink-0">
            <ImageWithFallback 
              src={fotoPerfil} 
              alt="Foto de Tomás Gallastegui"
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Contacto */}
          <div className="mb-6">
            <h3 className="text-lg mb-4 pb-2 border-b border-blue-400">CONTACTO</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe size={16} className="mt-0.5 flex-shrink-0" />
                <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="break-all hover:text-blue-400 transition">
                  {personalInfo.website}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Github size={16} className="mt-0.5 flex-shrink-0" />
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="break-all hover:text-blue-400 transition">
                  {personalInfo.github}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Linkedin size={16} className="mt-0.5 flex-shrink-0" />
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="break-all hover:text-blue-400 transition">
                  {personalInfo.linkedin}
                </a>
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div className="mb-6">
            <h3 className="text-lg mb-4 pb-2 border-b border-blue-400">HABILIDADES</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span key={idx} className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Educación */}
          <div>
            <h3 className="text-lg mb-4 pb-2 border-b border-blue-400">EDUCACIÓN</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="text-sm">
                  <p className="text-blue-300 text-xs mb-1 font-bold">{edu.period}</p>
                  <p className="mb-1 leading-tight">{edu.degree}</p>
                  <p className="text-gray-300 text-xs">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Columna Derecha - Contenido Principal */}
        <div className="w-[65%] p-8 flex flex-col">

          {/* Header con botón */}
          <div className="relative mb-5">
            <h1 className="text-4xl text-gray-800 mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-blue-600 mb-2">{personalInfo.title}</p>
            <button
              onClick={handleDownloadPDF}
              className="no-print absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition text-sm"
            >
              <Download size={16} />
              PDF
            </button>
          </div>

          {/* Resumen */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <Code size={20} className="text-blue-600" />
              <h2 className="text-xl text-gray-800 uppercase tracking-wide">Perfil Profesional</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>
          </div>

          {/* Experiencia */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={20} className="text-blue-600" />
              <h2 className="text-xl text-gray-800 uppercase tracking-wide">Experiencia Profesional</h2>
            </div>
            <div className="space-y-4">
              {experience.map((job, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-gray-800 font-bold">{job.position}</h3>
                      <p className="text-blue-600 text-sm">{job.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded font-bold">{job.period}</span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="leading-tight">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Proyectos Destacados - Convertido a Grid de 2 columnas */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={20} className="text-blue-600" />
              <h2 className="text-xl text-gray-800 uppercase tracking-wide">Proyectos Destacados</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <h3 className="text-gray-800 font-bold">Sistema de Turnos</h3>
                <p className="text-gray-600 text-xs mb-1 leading-tight">Integración de WhatsApp y Google Calendar para citas médicas.</p>
                <p className="text-xs text-blue-600 font-bold">n8n • WhatsApp API • Cloud</p>
              </div>
              <div>
                <h3 className="text-gray-800 font-bold">Gestión de Laboratorios</h3>
                <p className="text-gray-600 text-xs mb-1 leading-tight">Administración de recursos, inventario y usuarios (LIA).</p>
                <p className="text-xs text-blue-600 font-bold">Java • MySQL • GlassFish</p>
              </div>
              <div>
                <h3 className="text-gray-800 font-bold">Landing Page Comercial</h3>
                <p className="text-gray-600 text-xs mb-1 leading-tight">Desarrollo de sitio web de alto rendimiento y carga rápida.</p>
                <p className="text-xs text-blue-600 font-bold">Astro • JavaScript</p>
              </div>
              <div>
                <h3 className="text-gray-800 font-bold">Análisis REFES (Salud)</h3>
                <p className="text-gray-600 text-xs mb-1 leading-tight">Dashboard para auditoría de establecimientos federales.</p>
                <p className="text-xs text-blue-600 font-bold">Power BI</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}