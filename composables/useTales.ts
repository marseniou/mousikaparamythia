export const useTales = () => {
  const tales = {
    'giati-i-gata-kai-o-skulos-einai-ehthroi': 'Γιατί η γάτα και ο σκύλος είναι εχθροί',
    'h-kamilopardali-kai-oi-pithikoi': 'Η καμηλοπάρδαλη και οι πίθηκοι',
    'i-alepou-kai-o-korudallos': 'Η αλεπού και ο κορυδαλλός',
    'i-istoria-tou-keraunou-kai-tis-vrontis': 'Η ιστορία του κεραυνού και της βροντής',
    'i-koukouvagia-kai-i-perdika': 'Η κουκουβάγια και η πέρδικα',
    'i-mahi-ton-kavourion': 'Η μάχη των καβουριών',
    'liontari-lukos-kai-alepou': 'Λιοντάρι, λύκος και αλεπού',
    'o-fantasmenos-kokoras': 'Ο φαντασμένος κόκορας',
    'o-gaidaros-kai-i-lura': 'Ο γάιδαρος και η λύρα',
    'o-ilios-to-feggari-ki-o-aeras-vgainoun-gia-deipno': 'Ο ήλιος, το φεγγάρι κι ο αέρας βγαίνουν για δείπνο',
    'o-lagos-pou-fovotan': 'Ο λαγός που φοβόταν',
    'o-laimargos-pontikos': 'Ο λαίμαργος ποντικός',
    'o-lukos-i-alepou-ki-o-gaidaros': 'Ο λύκος, η αλεπού κι ο γάιδαρος',
    'o-mulonas-kai-o-gatos-tou': 'Ο μυλωνάς και ο γάτος του',
    'o-pithikos-pou-egine-vasilias': 'Ο πίθηκος που έγινε βασιλιάς',
    'o-vatrahos-kai-i-alepou': 'Ο βάτραχος και η αλεπού',
    'pos-i-ma-mou-vrike-fagito-otan-peinouse': 'Πώς η μαιμού βρήκε φαγητό όταν πεινούσε',
    'to-ashimopapo': 'Το ασχημόπαπο',
    'to-asimenio-koudounaki': 'Το ασημένιο κουδουνάκι',
    'to-kolpo-tou-gatou': 'Το κόλπο του γάτου',
    'to-pathima-tou-lukou': 'Το πάθημα του λύκου',
    'to-pio-gluko-psomi': 'Το πιο γλυκό ψωμί',
    'to-xriso-psaraki': 'Το χρυσόψαρο'
  }

  return Object.entries(tales).map(([id, title]) => ({ id, title }))
}
