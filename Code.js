function gmailAutoArchive() {
  var threads = GmailApp.getInboxThreads();
  for (var thread of threads) {
    thread.moveToArchive();
  }
  console.log(`Archived ${threads.length} emails.`)
}

