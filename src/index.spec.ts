import { Fixture, TestBed } from '@plumejs/testing';
import { AppComponent } from './index';

describe('@plumejs/core Component', () => {
  let appRoot: Fixture<AppComponent>;

  beforeEach(async () => {
    appRoot = await TestBed.MockComponent(AppComponent);
  });

  it('translation should return "Welcome to PlumeJS"', () => {
    const h1 = appRoot.element.querySelector('h1');
    expect(h1.innerHTML).toBe('Welcome to PlumeJS');
  });

  afterEach(() => {
    TestBed.RemoveComponent(appRoot);
  });
});