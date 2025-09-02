
export function Link ({item}){
    return (
        <Link
              to={item.url}
              rel="noopener noreferrer"
              target="_blank"
            >
        </Link>
    )
}