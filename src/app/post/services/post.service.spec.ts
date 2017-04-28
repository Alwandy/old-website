import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './post.service';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService]
    });
  });

  it('should ...', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
