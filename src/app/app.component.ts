import { Component } from '@angular/core';
import { interval, of } from 'rxjs';
import { combineLatest } from 'rxjs';
import { PokemonChoose } from 'src/interface-api/pokemon-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // pokemon$ = of('pokemon');
  // test$ = combineLatest({ pokemon: this.pokemon$ }).subscribe((val) =>
  //   console.log(val)
  // );

  pokemonChooseList: PokemonChoose[] = [
    {
      id: 0,
      pokename: 'pikachu',
      choose: 'Y',
    },
    { id: 1, pokename: 'ditto', choose: 'N' },
    { id: 2, pokename: 'wobbuffet', choose: 'Y' },
    { id: 3, pokename: 'girafarig', choose: 'N' },
    { id: 4, pokename: 'forretress', choose: 'Y' },
  ];
  title = 'angular-pure-pipe';
}
