import { Name } from './name.model';
import { Id } from './id.model';

export interface NameId<N = string, I = number> extends Name<N>, Id<I> {
}
