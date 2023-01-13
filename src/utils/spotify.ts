//Code from @dreyfuse92


type Artist = {
    name: string,
    images: { url: string }[],
    external_urls: { spotify: string },
    followers: { total: number },
}

export type NowPlayingTrackResponse = {
    isPlaying: boolean;
    title: string;
    artist: string;
    url: string;
    img: string;
};


// Get access token from Spotify
export const getAccessToken = async () => {
    // Get environment variables
    const refresh_token ='AQB_VWqQOhFnu1fuN8KIQVAUBY_jOlCvDG9B5A0nZUUTq7asM32PdgVEBAUIaDMBRg7AzNGCfDkpiP2qAHgPDHnyUa3Bqrqdr5nKhZoGlpZ2DvA3bcOQyEx_sd1BW8eI7h0';
    const client_id = '53df0ab0415347259dcb6ddbe587ed1f';
    
    const client_secret ='3997201f0a5f4c9cbdae15e447a497f4';

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
    const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });
    return response.json();
}

// Get authorization for currently playing scope
const nowPlaying = async () => {
    const { access_token } = await getAccessToken();
    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

//Get currently playing track
export const get = async () => {
    const response = await nowPlaying();

    if (response.status === 204 || response.status > 400) {
        return new Response(JSON.stringify({ isPlaying: false }), {
            status: 200,
        });
    }

    const { item } = await response.json();

    const track = {
        isPlaying: true,
        title: item.name,
        artist: item.artists
            .map((_artist: Artist) => _artist.name)
            .join(", "),
        url: item.external_urls.spotify,
        img: item.album.images[0].url,
    };

    return new Response(JSON.stringify(track), {
        status: 200,
    });
};