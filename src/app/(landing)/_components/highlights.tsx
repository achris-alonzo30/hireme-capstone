import {
    Trophy,
    Share2,
    Handshake,
    DollarSign,
    FastForward,
    PencilRuler,
    BotMessageSquare,
    TabletSmartphoneIcon
} from "lucide-react";

export const Highlights = () => {
    return (
        <section>
            <article className="h-full px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
                <aside className="text-center">
                    <h2 className="text-2xl sm:text-4xl font-semibold tracking-tighter text-neutral-200">
                        Experience the true power of {" "}
                        <span className="text-app-color ">HireMe</span>
                    </h2>
                    <p className="max-w-lg mx-auto mt-4 text-sm sm:text-base text-gray-400">
                        All these features are right at your fingertips within the browser. And
                        this is just the start, these features will continue to keep improving!
                    </p>
                </aside>
                <aside className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-center mt-12 gap-y-12 lg:mt-16 gap-x-6">
                    <div className="flex flex-col items-center gap-2 rounded-2xl p-2 hover:bg-neutral-900 hover:border hover:border-white/[0.2] transtion-all">
                        <PencilRuler className="text-app-color h-8 w-8" />
                        <hgroup className="mt-3 sm:mt-6">
                            <h3 className="font-medium text-neutral-300 text-sm sm:text-base">Live editing</h3>
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                Instantly see the real-time update of every change you make.
                            </p>
                        </hgroup>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-2xl p-2 hover:bg-neutral-900 hover:border hover:border-white/[0.2] transtion-all">
                        <BotMessageSquare className="text-app-color h-8 w-8" />
                        <hgroup className="mt-3 sm:mt-6">
                            <h3 className="font-medium text-neutral-300 text-sm sm:text-base">AI Powered Insights</h3>
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                Leverage the power of AI to get feedback on your resume, tailored to each job you apply.
                            </p>
                        </hgroup>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-2xl p-2 hover:bg-neutral-900 hover:border hover:border-white/[0.2] transtion-all">
                        <Trophy className="text-app-color h-8 w-8" />
                        <hgroup className="mt-3 sm:mt-6">
                            <h3 className="font-medium text-neutral-300 text-sm sm:text-base">Beat Applicant Tracking Systems (ATS)</h3>
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                Build compelling resume that highlights your skills and experience to land your dream job.
                            </p>
                        </hgroup>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-2xl p-2 hover:bg-neutral-900 hover:border hover:border-white/[0.2] transtion-all">
                        <FastForward className="text-app-color h-8 w-8" />
                        <hgroup className="mt-3 sm:mt-6">
                            <h3 className="font-medium text-neutral-300 text-sm sm:text-base">Track Progress & Stay Motivated</h3>
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                Monitor your job application progress and stay motivated throughout the job search journey.
                            </p>
                        </hgroup>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-2xl p-2 hover:bg-neutral-900 hover:border hover:border-white/[0.2] transtion-all">
                        <Share2 className="text-app-color h-8 w-8" />
                        <hgroup className="mt-3 sm:mt-6">
                            <h3 className="font-medium text-neutral-300 text-sm sm:text-base">Network & Learn</h3>
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                Connect with a network of job seekers, share experiences, and learn valuable tips to land your next interview.
                            </p>
                        </hgroup>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-2xl p-2 hover:bg-neutral-900 hover:border hover:border-white/[0.2] transtion-all">
                        <Handshake className="text-app-color h-8 w-8" />
                        <hgroup className="mt-3 sm:mt-6">
                            <h3 className="font-medium text-neutral-300 text-sm sm:text-base">Free Yourself from Application Stress</h3>
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                Our app helps you streamline the job search process, reducing stress and giving you more time to focus on career goals.
                            </p>
                        </hgroup>
                    </div> 
                    <div className="flex flex-col items-center gap-2 rounded-2xl p-2 hover:bg-neutral-900 hover:border hover:border-white/[0.2] transtion-all">
                        <DollarSign className="text-app-color h-8 w-8" />
                        <hgroup className="mt-3 sm:mt-6">
                            <h3 className="font-medium text-neutral-300 text-sm sm:text-base">Free to use</h3>
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                Our app is completely free to use, giving you access to all the tools you need to succeed in your job search.
                            </p>
                        </hgroup>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-2xl p-2 hover:bg-neutral-900 hover:border hover:border-white/[0.2] transtion-all">
                        <TabletSmartphoneIcon className="text-app-color h-8 w-8" />
                        <hgroup className="mt-3 sm:mt-6">
                            <h3 className="font-medium text-neutral-300 text-sm sm:text-base">Mobile Friendly</h3>
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                Our app is fully optimized for mobile devices, allowing you to easily access and manage your job search wherever you are.
                            </p>
                        </hgroup>
                    </div>
                </aside>

            </article>
        </section>
    )
}