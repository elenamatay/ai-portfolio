import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import RelatedProjects from '../../components/projects/RelatedProjects';
import Button from '../../components/reusable/Button';

function ProjectSingle(props) {
    const [projectDetails, setProjectDetails] = useState([]);

    useEffect(() => {
        setProjectDetails(props.project.ProjectInfo.ProjectDetails);
    }, [props.project.ProjectInfo.ProjectDetails]);

    return (
        <div className="container mx-auto">
            <PagesMetaHead title={props.project.title} />

            {/* Header */}
            <div>
                <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    {props.project.ProjectHeader.title}
                </p>
                <div className="flex">
                    <div className="flex items-center mr-10">
                        <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                            {props.project.ProjectHeader.publishDate}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
                        <div className="flex flex-wrap ml-2">
                            {props.project.ProjectHeader.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="font-general-regular bg-gray-200 text-primary-dark rounded-lg px-3 py-1 mr-2 mb-2"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div
                className={`grid grid-cols-1 ${
                    props.project.ProjectImages.length === 2
                        ? 'sm:grid-cols-2'
                        : props.project.ProjectImages.length >= 3
                        ? 'sm:grid-cols-3'
                        : ''
                } sm:gap-10 mt-12`}
            >
                {props.project.ProjectImages.map((media) => {
                    return (
                        <div
                            className={`mb-10 sm:mb-0 ${
                                props.project.ProjectImages.length === 1 ? 'w-full' : ''
                            }`}
                            key={media.id}
                        >
                            {media.type === 'image' ? (
                                <Image
                                    src={media.src}
                                    className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                    alt={media.title}
                                    key={media.id}
                                    layout="responsive"
                                    width={100}
                                    height={90}
                                />
                            ) : (
                                <video controls className="rounded-xl cursor-pointer shadow-lg sm:shadow-none">
                                    <source src={media.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Info */}
            <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                <div className="w-full sm:w-1/3 text-left">
                    {/* Single project client details */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                            {props.project.ProjectInfo.ClientHeading}
                        </p>
                        <ul className="leading-loose">
                            {props.project.ProjectInfo.CompanyInfo.map((info) => {
                                return (
                                    <li
                                        className="font-general-regular text-ternary-dark dark:text-ternary-light leading-normal mb-2"
                                        key={info.id}
                                    >
                                        <span className="leading-tight">{info.title}: </span>
                                        {info.title === 'Course info' || info.title === 'Repository' ? (
                                            <a
                                                href={info.details}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline hover:text-blue-500 cursor-pointer duration-300"
                                            >
                                                Click here
                                            </a>
                                        ) : (
                                            <a
                                                href={info.title === 'Website' ? info.details : undefined}
                                                className={
                                                    info.title === 'Website' || info.title === 'Phone'
                                                        ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                                                        : ''
                                                }
                                                aria-label="Project Website and Phone"
                                            >
                                                {info.details}
                                            </a>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Single project objectives */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {props.project.ProjectInfo.ObjectivesHeading}
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                            {props.project.ProjectInfo.ObjectivesDetails}
                        </p>
                    </div>

                    {/* Single project technologies */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {props.project.ProjectInfo.Technologies[0].title}
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                            {props.project.ProjectInfo.Technologies[0].techs.join(', ')}
                        </p>
                    </div>

                    {/* Single project social sharing */}
                    <div>
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {props.project.ProjectInfo.SocialSharingHeading}
                        </p>
                        {/* <div className="flex items-center gap-3 mt-5">
                            {props.project.ProjectInfo.SocialSharing.map((social, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={social.url}
                                        target="__blank"
                                        passHref={true}
                                        aria-label="Share Project"
                                        className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                                    >
                                        <span className="text-lg lg:text-2xl">{social.icon}</span>
                                    </Link>
                                );
                            })}
                        </div> */}
                    </div>
                </div>

                {/*  Single project right section details */}
                <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0 project-details">
                    <p className="text-2xl font-bold mb-7 text-primary-dark dark:text-primary-light">
                        {props.project.ProjectInfo.ProjectDetailsHeading}
                    </p>
                    {projectDetails.map((details) => {
                        return (
                            <div
                                key={details.id}
                                className="font-general-regular mb-5 text-lg"
                                dangerouslySetInnerHTML={{ __html: details.details }}
                            ></div>
                        );
                    })}
                </div>
            </div>

            {/* Repo Button */}
            <div className="mt-20 text-center">
                <div className="flex justify-center">
                    <Button
                        title="Check It Out"
                        icon={<FaGithub />}
                        onClick={() => window.open(props.project.githubUrl, '_blank')}
                        className="p-8 text-xl bg-black"
                    />
                </div>
            </div>

            <RelatedProjects />

            <style jsx>{`
                .project-details a {
                    color: blue !important;
                    text-decoration: underline !important;
                }
                .project-details a:hover {
                    color: darkblue !important;
                }
            `}</style>

        </div>
    );
}

export async function getServerSideProps({ query }) {
    const { id } = query;
    return {
        props: {
            project: projectsData.filter((project) => project.id === parseInt(id))[0],
        },
    };
}

export default ProjectSingle;