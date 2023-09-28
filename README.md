# Vinyl Randomizer
A personal project to help ensure all my vinyl get a spin on a regular basis.

## User Flow

Upon launching the app, the user will click a button to randomly select a record within the collection/database. They will then be prompted to select that record, or randomize the result again, until they select the desired record to queue up. Based on the user's choise, the record chosen will then trigger an update, enabling a tally to be kept of each record that has been played, per user's input. Once a record has been selected, the list of records to play in the future will not include the recently selected album. As the user continues to interact with this app, the records that have already been spun will no longer be in the queue until ALL records have had a go on the turn table.
When you've been collecting records for over a decade, <i><b>it's easy to forget the gems you've got!</b></i>

## TODO
- Database creation and seeding
- API Implementation
- UI package for vertical text wheel
- Form page to add new records

https://www.npmjs.com/package/react-native-wheel-scrollview-picker

### Future Enhancements
- add ability to view collection as a table and modify subfields of records (genre/format/etc)
- connection with Discogs account so that when I buy a new record and add it to this app, it will also add it to my discog's collection