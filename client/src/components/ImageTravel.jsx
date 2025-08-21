
function ImageTravel({ photos, item}) {
    return (
        <div className="flex flex-row gap-6 mt-2">
            {photos.slice(1).map((photo, photoIndex) => (
                <img
                    key={photoIndex}
                    src={photo}
                    alt={item.title}
                    className="w-[100px] h-[100px] rounded-2xl object-cover"
                />
            ))}
        </div>
    )
}

export default ImageTravel;
