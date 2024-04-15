import { useRouter } from 'next/router'

function ActiveLink({ children, href, className = "" }) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a
            className={` text-body-text lg:text-body-large-lg 2xl:text-body-large-16-2xl ${className} ${router.asPath === href ? 'text-graphite before:!scale-x-100' : 'text-graphite'}`}
            href={href}
            onClick={handleClick}
        >
            {children}
        </a>
    )
}

export default ActiveLink