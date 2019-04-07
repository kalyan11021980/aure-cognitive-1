const SAD_EMOJI = [55357, 56864];
const HAPPY_EMOJI = [55357, 56832];
const NEUTRAL_EMOJI = [55357, 56848];


new Vue({
  el: '#app',
  data: {
    comments: [],
    reviewneeded: []
  },
  created() {
    let pusher = new Pusher('d1acd49f0e6f34858a29', {
      cluster: 'us2',
      forceTLS: true
    });

    const channel = pusher.subscribe('comments');
    channel.bind('new-comment', data => {
      const analysis = data.sentiment > 0 ? HAPPY_EMOJI : (data.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI);
      const response = {
        message: data.message,
        mood: String.fromCodePoint(...analysis)
      }
      this.comments.push(response);
    });
  },
  methods: {
    postComment(event) {

      const message = event.target.value;
      if (event.keyCode === 13) {
        const comment = {
          comment: message,
        };


        event.target.value = "";

        axios.post('/comment', comment).then(data => {
          console.log(data)
        });
        axios.post('/moderate', comment).then(data => {
          this.reviewneeded.push(data.data.Classification.ReviewRecommended);
          console.log(this.reviewneeded);
        });
        
      }
    }
  }
})
