import { getHome, getContact } from "../sanity/getSettings";
import ServiceImage from "../components/ServiceImage";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Faq from "../components/Faq";

export const revalidate = 60;

export default async function Home() {
    const [home, contact] = await Promise.all([getHome(), getContact()]);
    const phone = contact?.phone || "+359 88 000 0000";

    return (
        <main className="min-h-screen">
            <section className="relative overflow-hidden">

                <div className="mx-auto grid max-w-wrap items-center gap-10 px-6 pt-36 pb-20 md:grid-cols-2 md:gap-12 md:pt-44">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl text-deep">
                            Усмивката, която <span className="italic text-teal">ви приляга</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-md text-lg text-muted md:mx-0">
                            Съвременна дентална грижа с 3D диагностика и минимално инвазивни
                            методи — за предвидими, дълготрайни резултати.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start">
                            <a
                                href={`tel:${phone.replace(/\s/g, "")}`}
                                className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-hover"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
                                </svg>
                                Обади се
                            </a>
                        </div>
                        <div className="mt-12 flex flex-wrap justify-center gap-8 border-t border-line pt-8 md:justify-start">
                            <div><b className="block font-serif text-3xl text-teal">12+</b><span className="text-sm font-semibold text-muted">години опит</span></div>
                            <div><b className="block font-serif text-3xl text-teal">4 500+</b><span className="text-sm font-semibold text-muted">усмивки</span></div>
                            <div><b className="block font-serif text-3xl text-teal">3D</b><span className="text-sm font-semibold text-muted">планиране</span></div>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-enamel shadow-soft">
                            {home?.heroImage?.asset ? (
                                <ServiceImage image={home.heroImage} alt="Доктор" sizes="(max-width: 768px) 80vw, 400px" />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-center text-sm text-muted">
                                    Качете снимка в<br />„Начало“
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <WhyUs />
            <Process />
            <Faq items={home?.faq} />
        </main>
    );
}