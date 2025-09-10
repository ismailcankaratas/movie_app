import { Client, Databases, ID, Query } from "react-native-appwrite";

const DATABASE_ID = String(process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID);
const PROJECT_ID = String(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);
const ENDPOINT = String(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT);

const client = new Client();
client
    .setEndpoint(ENDPOINT) // Your Appwrite Endpoint
    .setProject(PROJECT_ID) // Your project ID
    .setPlatform('com.anonymous.movie-app') // Your application ID or bundle ID.
    ;

const databases = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        const result = await databases.listDocuments(
            DATABASE_ID,
            "metrics",
            [Query.equal("searchTerm", query)]
        );
        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];
            await databases.updateDocument(DATABASE_ID, "metrics", existingMovie.$id, {
                count: existingMovie.count + 1
            });
        } else {
            await databases.createDocument(DATABASE_ID, "metrics", ID.unique(), {
                searchTerm: query,
                movie_id: movie.id,
                count: 1,
                title: movie.title,
                poster_url: "https://image.tmdb.org/t/p/w500" + movie.poster_path
            });
        }
    } catch (error) {
        console.log("updateSearchCount: ", error);
        throw error;
    }
}