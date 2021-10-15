function searchChannel(channel) {
	return new Promise(async(resolve, reject) => {
		try {
		    const html = await (await fetch(`https://youtube.com/results?search_query=${encodeURIComponent(channel)}&sp=EgIQAg%253D%253D#`)).text()
		    const json = (new Function('return ' + html.match(/var ytInitialData = ({.*})/)[0].replace(/var ytInitialData = /,'').split(';</script>')[0]))()
            const array = json.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents
            const result = array.filter(o => o.channelRenderer).map(x => { return { id: x.channelRenderer.channelId, url: 'https://youtube.com/c/'+x.channelRenderer.channelId, name: x.channelRenderer.title.simpleText, image: (x.channelRenderer.thumbnail.thumbnails.length === 2) ? 'https'+x.channelRenderer.thumbnail.thumbnails[1].url : 'https'+x.channelRenderer.thumbnail.thumbnails[0].url, desc: x.channelRenderer.descriptionSnippet ? ((x.channelRenderer.descriptionSnippet.runs.length === 2) ? x.channelRenderer.descriptionSnippet.runs.reduce((a,m) => a.text+m.text) : x.channelRenderer.descriptionSnippet.runs[0].text) : null, videoCount: x.channelRenderer.videoCountText ? x.channelRenderer.videoCountText.runs[0].text+' video': null, subsCount: x.channelRenderer.subscriberCountText ? x.channelRenderer.subscriberCountText.simpleText : null } })
            resolve({ status: true, res: { fixQuery: (array[0].showingResultsForRenderer) ? array[0].showingResultsForRenderer.correctedQueryEndpoint.searchEndpoint.query : channel, result } })
        } catch(error) {
        	reject({ status: false, error })
        }
    })
}
