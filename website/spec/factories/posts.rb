# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :post do
    title 'Neatly trimmed moustaches brunswick st hippy, dame edna bill clinton ate two bowls etihad stadium graffiti the corner hotel, moomba carlton frankston bogans.'
    blurb "Frankston bogans trams, collins place pellegrini's melbourne central swanston posh brighton, movida laksa king world's most liveable city collingwood ferals prahran hipsters, the city loop mamasita lygon street spruikers tullamarine don't paint over the banksy's, kylie minogue fairy penguins black is alway in fashion."
    content 'The borek woman flemington racecourse, footscray hobos tullamarine don dons vic market street art, etihad stadium melb fed square dumplings essendon bombers, melbourne central temper trap hook turns the saints moomba, the hawks spencer st station cookie.\nMSAC the storm, south melb dim sims graffiti north melbourne shinboners south of the river frankston bogans, the city loop collins place richmond tigers ball etihad stadium, kath and kim the crazy wing challenge werribee wildlife trams brown alley, geoffrey rush kylie minogue the G.\nThe bulldogs street art, spiegeltent flemington racecourse the espy don dons four seasons in one day, the melbourne cup hook turns richmond tigers richmond tigers mamasita, warehouse chic aami park ticket inspector posh brighton emerald peacock, melb tullamarine dandenong.\nEmpire of the sun citylink, temper trap avalon is so not melb flemington racecourse swanston victoria street dodgies, dame edna carlton spring racing carnival lions bar Rod Laver, tullamarine formula one grand prix the australian open the espy rooftop cinema, spring racing carnival prahran hipsters NGV culture fix.'

    factory :invalid_post do
      title nil
    end
  end
end
