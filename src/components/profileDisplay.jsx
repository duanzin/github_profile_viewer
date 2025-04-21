function ProfileDisplay({ avatar, name, bio }) {
    return (
      <section className="flex flex-row items-center gap-8 max-h-64 w-3xl py-5 px-8 bg-gray-200 rounded-3xl">
        <img
          src={avatar}
          alt={name}
          className="h-56 rounded-full border-2 border-blue-600"
        />
        <div className="flex flex-col justify-center gap-4 w-full h-full">
            <h2 className="text-xl font-bold text-blue-600">{name}</h2>
            <p className="text-sm font-light tracking-normal">{bio}</p>
        </div>
      </section>
    );
  }
  
  export default ProfileDisplay;